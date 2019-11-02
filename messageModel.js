var mongoose = require('mongoose');

var messageSchema = mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }, 
    msg {
        type: String,
        required: true
    }
    score: int
})

// export message model
var Message = module.exports = mongoose.model('message', messageSchema)

module.exports.get = function (callback, limit) {
    Message.find(callback).limit(limit)
}
