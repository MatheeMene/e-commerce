const express    = require('express');
const bodyParser = require('body-parser');
const sql        = require("mssql");
const config     = require('./database');
const app        = express();
const router     = express.Router();
const jwt        = require('jsonwebtoken');
const cripto     = require('./cripto/Cripto');
const PORT       = 4000;
const SECRET     = 'bef5c2df9cc58bec729fd7b7c0e2819429553015873b1452d396d7e0c26cfac3d44a1cc42c45d3084ba48a74ac45827155c28bf71dfbc340dcd00efa892661ea';

//echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
//sudo sysctl -p

//Cors Policy
app.use(function( req, res, next ) {
	res.header("Access-Control-Allow-Origin", req.headers.origin);
	res.header("Access-Control-Allow-Headers", "x-requested-with, content-type");
	res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Max-Age", "1000000000");
	
	if('OPTIONS' == req.method) {
		res.sendStatus(200);
	} else { 
		next(); 
	}
 });

//Configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => res.send('Home'));
app.use('/', router);

sql.connect(config, err => {
	
	if(err) console.log(err);
	
	const request = new sql.Request();
	
	router.post('/api/createproduct', (req, res) => {

		const weekOffer   = req.body.weekOffer;

		request.query(`INSERT INTO product(title, description, quantity, price, image_url, week_offer) 
		VALUES('${ title }', '${ description }', '${ quantity }', '${ price }', '${ imageUrl };', '${ weekOffer }')`
		, (err, recordset) => {

			if(err) {
				console.log(err);
			} else {
				res.send(recordset);
			}
		});
	});

	router.post('/api/createuser', (req, res) => {

		const name            = req.body.firstName;
		const surname         = req.body.lastName;
		const email           = req.body.email;
		const password        = req.body.password;
		const repeatPassword  = req.body.repeatPassword;
		const criptoPassword  = cripto(password);
		const rcriptoPassword = cripto(repeatPassword);

		request.query(`INSERT INTO person(name, last_name, email, password, repeat_password) 
		VALUES('${ name }', '${ surname }', '${ email }', '${ criptoPassword }', '${ rcriptoPassword }');`
		, (err, recordset) => {

			if(err) {
				console.log(err);
			} else {
				res.send(recordset);
			}
		});
	});

	router.get('/api/weekoffer', (req, res) => {

		request.query(`SELECT * FROM product WHERE week_offer = 'true';`, (err, recordset) => {

			if(err) {
				console.log(err);
			} else {
				res.send(recordset.recordset);
			}
		});
	});

	router.get('/api/allproducts', (req, res) => {

		request.query(`SELECT * FROM product;`, (err, recordset) => {
			if(err) {
				console.log(err);
			} else {
				res.send(recordset.recordset);
			}
		});
	});

	router.post('/api/product/:id', (req, res) => {

		const id = req.params.id;

		request.query(`SELECT * FROM product WHERE id = ${ id };`, (err, recordset) => {
			if(err) {
				console.log(err);
			} else {
				res.send(recordset.recordset);
			}
		});
	});

	router.post('/api/login', (req, res) => {

		const { email }    = req.body;
		const { password } = req.body;

		const passwordFromFront = cripto(password);

		const MSG = "Email ou senha incorretos";

		request.query(`SELECT * FROM person WHERE email = '${ email }';`, (err, recordset) => {

			const response = recordset.recordset;

			if(response.length > 0) {

				const authUser = {
					id:       response[0].id,
					name:     response[0].name,
					email:    response[0].email,
					password: response[0].password
				}
				
				if(authUser.email === email && authUser.password === passwordFromFront) {
					let auth = true;
					
					jwt.sign({ authUser }, SECRET, (err, token) => {
						res.send({ token, auth });
					});
				}

			} else {
				let auth = false;
				res.send({ MSG, auth })
			}
		});
	});
});

app.listen(PORT, () => {
	console.log(`Server is running my king, on port -> ${ PORT }`);
});