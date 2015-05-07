var mysql = require('mysql');
/** 
	Create connection for mysql 
**/
//db config here.

var pool = mysql.createPool(dbconfig);

//function temperatureData (data, callback){
	pool.getConnection(function(err, connection){ // where 'sen_time.ID' = 'sen_calc.ID' //'sen_time',
		console.log('pool connection: '+err);
		var connectionError = checkSQLConnection(err, connection); //check if there is error in connection to db.
		if(connectionError){
			return;
		}
		else {
			connection.query("select sen_calc.TIME_ID, sen_time.SEN_ID, sen_calc.SEN_CALC from sen_calc, sen_time where sen_time.ID = sen_calc.TIME_ID and sen_time.SEN_ID=1", function(query_err, result){
				connection.release();
				if(query_err){
					console.log(query_err);
					return query_err;
				}
				else {
					console.log(result);
					return;
				}
			});

		}
		
	});

//}
	

/** Handling error in connection with database **/
function checkSQLConnection(err, connection){
	if (err) {
		connection.release();
		return new Error('Error in database connection');	
	}
}

/** exposes funtions to be used in app.js **/
module.exports = {

};