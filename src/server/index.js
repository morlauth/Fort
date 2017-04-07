/* Main script for the web server */
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const ejs = require('ejs');
const partials = require('express-partials');
const path = require('path')
const {Routes} = require('./Routes.js');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var app = express();

app.use(express.static(path.join(__dirname , '../public')));
app.use(cookieParser());
app.use(jsonParser);
app.use(urlencodedParser);
app.use(partials());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/../views');

Routes.forEach(function(el) {
	if (el[2]) {
		var controller = el[2].split('@');
		var action = controller[1];
		var controller = require('./controllers/' + controller[0] + 'Controller');

		app[el[0]](el[1], function(req, res) {
			controller[action](req, res);
		});
	} else {
		app[el[0]](el[1], function(req, res) {
			res.render(el[3], {title: el[4]});
		});
	}
});

// Gulp compiling
const spawn = require('child_process').spawn;
const ls = spawn('gulp', {cwd: `${__dirname}/../assets`});

ls.stdout.on('data', (data) => {
	console.log(`${data}`);
});
ls.stderr.on('data', (data) => {
	console.log(`${data}`);
});
ls.on('close', (data) => {
	console.log('Gulp ended: ' + `${data}`);
});

app.listen(3000, function() {
	console.log(chalk.cyan('App started on port 3000'));
});