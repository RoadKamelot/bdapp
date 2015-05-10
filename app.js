/*app.js 
	Khanh Nguyen
	4/13/15 */
var express = require('express'),
	path = require('path'),
	_lodash = require('lodash'),
	dronedbAccessor = require('./dronedbAccessor'),
	app = express();



app.use(express.static(__dirname+'/'));
app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html')); // single dot: go down one, .. means get out one up
});

app.get('/temp', function(req, res){
	console.log('IN HERE');
	dronedbAccessor.temperatureData('1', function(err, result){
		return result ? res.send(result):res.send(err);
	});
});




app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});