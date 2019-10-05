﻿require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));
// app.use('/simplify', require('./simplify/users.braintree'));

// global error handler
app.use(errorHandler);

// routes(app);


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80):4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
