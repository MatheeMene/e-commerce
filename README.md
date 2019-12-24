This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To do a database connection, install SqlServer, configure your connection in 'server/database.js'.

DATABASE SCHEMA:

############################################################

DROP TABLE IF EXISTS person;
CREATE TABLE person (
	id INT NOT NULL IDENTITY PRIMARY KEY, 
	name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	password VARCHAR(15) NOT NULL,
	repeat_password VARCHAR(15) NOT NULL,
);

DROP TABLE IF EXISTS product;
CREATE TABLE product (
	id INT NOT NULL IDENTITY PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	description VARCHAR(255) NOT NULL,
	quantity INT NOT NULL,
	price FLOAT NOT NULL,
	image_url TEXT NOT NULL
);

ALTER TABLE product ADD week_offer VARCHAR(10) NULL;

############################################################

## Available Scripts

In the project directory, you can run:

### `npm install`

after finish, run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).