// FileName: index.js
// Import express
let express = require('express')
// Initialize the app
let app = express();
// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('who\'s hungry for some honey???'))

// Import routers
let apiRoutes = require('./api-routes')
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running honeypot on port " + port);
});
