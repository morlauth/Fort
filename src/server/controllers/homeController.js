module.exports = {
	index: function(req, res) {
		var info = req.body;

		if (info.fortLoggedIn) {
			res.redirect('@me');
		} else {
			res.render('home.ejs', {title: 'Fort'});
		}
	}
}