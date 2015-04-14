/*app.js 
	Khanh Nguyen
	4/13/15 */
var express = require('express'),
	path = require('path'),
	app = express();

app.use(express.static(__dirname+'/'));

app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index1.html'));
});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});