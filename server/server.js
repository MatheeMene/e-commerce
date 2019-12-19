const express = require('express');
const bodyParser = require('body-parser');
const sql = require("mssql");
const config = require('./database');
const app = express();
const router = express.Router();

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

router.post('/createproduct', (req, res) => {

	const title = req.body.title;
	const description = req.body.description;
	const quantity = parseInt(req.body.quantity);
	const price = parseFloat(req.body.price);
	const imageUrl = req.body.imageUrl;
	const weekOffer = req.body.weekOffer;

	sql.connect(config, err => {

		if (err) console.log(err);

		const request = new sql.Request();

		request.query(`INSERT INTO product(title, description, quantity, price, image_url, week_offer) 
		VALUES('${ title }', '${ description }', '${ quantity }', '${ price }', '${ imageUrl }', '${ weekOffer }')`
		, (err, recordset) => {

			if (err) {
				console.log(err);
				sql.close();
			} else {
				res.send('product has been added');
				sql.close();
			}

		});
	});
});

router.post('/createuser', (req, res) => {

	const name           = req.body.firstName;
	const surname        = req.body.lastName;
	const email          = req.body.email;
	const password       = req.body.password;
	const repeatPassword = req.body.repeatPassword;

	sql.connect(config, err => {

		if (err) console.log(err);

		const request = new sql.Request();

		request.query(`INSERT INTO person(name, last_name, email, password, repeat_password) 
		VALUES('${ name }', '${ surname }', '${ email }', '${ password }', '${ repeatPassword }')`
		, (err, recordset) => {

			if (err) {
				console.log(err);
				sql.close();
			} else {
				res.send('user has been added');
				sql.close();
			}

		});
	});
});

router.get('/weekoffer', (req, res) => {

	sql.connect(config, err => {

		if (err) console.log(err);

		const request = new sql.Request();
		request.query(`SELECT * FROM product WHERE week_offer = 'true'`, (err, recordset) => {

			if (err) {

				console.log(err);
				sql.close();

			} else {
				res.send(recordset.recordset);
				sql.close();
			}

		});
	});

});

app.listen(4000, () => {
	console.log('Server is running my king');
});