const express    = require('express');
const bodyParser = require('body-parser');
const sql        = require("mssql");
const config     = require('./database');
const app        = express();
const router     = express.Router();
const PORT       = 4000;

//echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
//sudo sysctl -p

// BECAUSE CORS POLICY
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, application/json");
	next();
});

//Configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res) => res.send('Home'));
app.use('/', router);

sql.connect(config, err => {
	
	if(err) console.log(err);
	
	const request = new sql.Request();
	
	router.post('/createproduct', (req, res) => {

		const title       = req.body.title;
		const description = req.body.description;
		const quantity    = parseInt(req.body.quantity);
		const price       = parseFloat(req.body.price);
		const imageUrl    = req.body.imageUrl;
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

	router.post('/createuser', (req, res) => {

		const name           = req.body.firstName;
		const surname        = req.body.lastName;
		const email          = req.body.email;
		const password       = req.body.password;
		const repeatPassword = req.body.repeatPassword;

		request.query(`INSERT INTO person(name, last_name, email, password, repeat_password) 
		VALUES('${ name }', '${ surname }', '${ email }', '${ password }', '${ repeatPassword }';)`
		, (err, recordset) => {

			if(err) {
				console.log(err);
			} else {
				res.send(recordset);
			}
		});
	});

	router.get('/weekoffer', (req, res) => {

		request.query(`SELECT * FROM product WHERE week_offer = 'true';`, (err, recordset) => {

			if(err) {
				console.log(err);
			} else {
				res.send(recordset.recordset);
			}
		});
	});

	router.get('/allproducts', (req, res) => {

		request.query(`SELECT * FROM product;`, (err, recordset) => {
			if(err) {
				console.log(err);
			} else {
				res.send(recordset.recordset);
			}
		});
	});

	router.post('/product/:id', (req, res) => {

		const id = req.params.id;

		request.query(`SELECT * FROM product WHERE id = ${ id };`, (err, recordset) => {
			if(err) {
				console.log(err);
			} else {
				res.send(recordset.recordset);
			}
		});
	});

	router.post('/login', (req, res) => {

		const email = req.body.email;

		request.query(`SELECT email, password FROM person WHERE email = ${ email };`, (err, recordset) => {
			if(err) {
				console.log(err);
			} else {
				res.send(recordset.recordset);
			}
		});
	});
});

app.listen(PORT, () => {
	console.log(`Server is running my king, on port -> ${ PORT }`);
});