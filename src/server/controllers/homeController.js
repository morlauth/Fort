module.exports = {
	index: function(req, res) {
		var info = req.body;

		if (info.fortLoggedIn) {
			var data = JSON.stringify({d: {loggedIn: true}})
			res.render('main.ejs', {page: 'home', d: data, title: 'Fort'});
		} else {
			var data = JSON.stringify({d: {loggedIn: false}});
			res.render('main.ejs', {page: 'home', d: data, title: 'Fort'});
		}
	}
}