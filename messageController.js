Message = require('./messageModel')

// handle index actions
exports.index = function (req, res) {
    Message.get(function (err, messages) {
	if (err) {
	    res.json({
		status: "error",
		message: err,
	    })
	}
	res.json({
	    status: "success",
	    message: "message retrived successfully",
	    data: messages
	})
    })
}

// handle create contact actions
exports.new = function (req, res) {
    var message = new Message()
    message.time = req.body.time
    message.id = req.body.id
    message.msg = req.body.msg
    message.score = req.body.score

    message.save(function (err) {
	if (err)
	    res.json(err)
	else
	    res.json({
                message: 'new message saved',
	        data: message
    	    })
    })
}

// view message info
exports.view = function (req, res) {
    Message.findById(req.params.message_id, function (err, message) {
        if (err)
            res.send(err)
        res.json({
            message: 'message found',
            data: message
        })
    })
}
