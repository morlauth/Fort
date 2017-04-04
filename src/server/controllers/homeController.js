module.exports = {
	index: function(req, res) {
		var info = req.body;
		
		res.render('home.ejs', {page: 'home'});
	}
}