/*app.js 
	Khanh Nguyen
	4/13/15 */
var express = require('express'),
	path = require('path'),
	app = express();


app.set('port', (process.env.PORT || 8080))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
var s = [];
for (i=0; i<s.length; i++){
	s.push(i);
}
var ksa = doksa();
var rc4 = function(text, key){

}
app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});