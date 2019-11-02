// FileName: index.js
// Import express
let express = require('express')

// Import body parser
let bodyParser = require('body-parser')

// Connect to mongoose and set connection variable
let mongoose = require('mongoose')

// Initialize the app
let app = express()

// Import routers
let apiRoutes = require('./api-routes')
app.use('/api', apiRoutes)

// configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
	extended:true
}))

app.use(bodyParser.json())

// connect to db
mongoose.connect('mongodb://localhost/honeypot', { useNewUrlParser: true } )
var db = mongoose.connection

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('who\'s hungry for some honey???'))

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running honeypot on port " + port);
});
