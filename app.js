/*app.js 
	Khanh Nguyen
	4/13/15 */
var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	dronedbAccessor = require('./dronedbAccessor'),
	app = express();



app.use(express.static(__dirname+'/'));
app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html')); // single dot: go down one, .. means get out one up
});






app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});