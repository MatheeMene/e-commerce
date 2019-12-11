const express = require('express');
const app = express();
const bdParser = require('body-parser');
const sql = require("mssql");
const config = require('./database');

// BECAUSE CORS POLICY
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, application/json");
  next();
});

// app.get('/login', (req, res) => {
// 	sql.connect(config, error => {

// 		if (error) console.log(error);

// 		request = new sql.Request();

// 		request.query('select * from person', (error, recordset) => {

// 			if (error) res.send('deu')

// 			res.send(recordset);
			
// 		});
// 	});
// });

app.listen(4000, () => {
	console.log('Server is running..');
});