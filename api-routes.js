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

var messageController = require('./messageController.js')
// message route
router.route('/messages')
    .get(messageController.index)
    .post(messageController.new)

router.route('/messages/:message_id')
    .get(messageController.view)
//Export API routes
module.exports = router;