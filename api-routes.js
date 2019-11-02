// Filename: api-routes.js
// Initalize express roter

let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
	res.json({
		status: 'API is working',
		message: 'please talk to Joe if you can\'t access this'
	});
});

//Export API routes
module.exports = router;
