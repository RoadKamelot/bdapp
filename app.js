/*app.js 
	Khanh Nguyen
	4/13/15 */
var express = require('express'),
	_ = require('lodash'),
	path = require('path'),
	dronedbAccessor = require('./dronedbAccessor'),
	app = express();



app.use(express.static(__dirname+'/'));
app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html')); // single dot: go down one, .. means get out one up
});
/* Temperature*/
app.get('/temp', function(req, res){
	dronedbAccessor.calcData(function(err, result){
		var groupbyUnits = _.groupBy(result, 'Units');
		var final_result = [];
		for (var i = 0; i < groupbyUnits.degrees.length;i++){
			var data = {
				Time: groupbyUnits.Celsius[i].SEN_TIME,
				Temp: groupbyUnits.Celsius[i].SEN_CALC || '0',
				Speed: groupbyUnits['Miles per Hour'][i].SEN_CALC || '0',
				Direction: groupbyUnits.degrees[i].SEN_CALC
			};
				final_result.push(data);

		}
		return result ? res.send(final_result):res.send(err);
		// return res.send(result);
	});
});





app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});