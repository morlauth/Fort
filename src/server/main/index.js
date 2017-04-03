/* Main script for the web server */
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const {Routes} = require('../Routes.js');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();
app.use(cookieParser());
app.use(jsonParser);
app.use(urlencodedParser);

Routes.forEach(function(el) {
	var controller = el[2].split('@');
	var action = controller[1];
	var controller = require('../controllers/' + controller[0] + 'Controller');

	app[el[0]](el[1], function(req, res) {
		controller[action](req, res);
	});
});

app.listen(3000);