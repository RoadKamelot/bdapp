(function() {

var mysql = require('mysql');
	/** 
		Create connection for mysql 
	**/
	//db config here.
	var dbconfig = {
		connectionLimit: 100,
		debug: false,
		host: process.env.DB_URL || 'us-cdbr-azure-west-b.cleardb.com',
		user: process.env.USER || 'b58dc498c64f9a',
		password: process.env.PASSWORD || '7ab3b404',
		database: process.env.DB || 'dronedb'

	};

	var pool = mysql.createPool(dbconfig);

	function temperatureData (data, callback){
		pool.getConnection(function(err, connection){ // where 'sen_time.ID' = 'sen_calc.ID' //'sen_time',
			console.log('pool connection: '+err);
			var connectionError = checkSQLConnection(err, connection); //check if there is error in connection to db.
			if(connectionError){
				return;
			}
			else {
				//time sort desc, get 5
				connection.query("select sen_calc.TIME_ID, sen_time.SEN_ID, sen_calc.SEN_CALC from sen_calc, sen_time where sen_time.ID = sen_calc.TIME_ID and sen_time.SEN_ID=? order by sen_time.ID desc limit 10",data, function(query_err, result){
				// connection.query("select sen_calc.TIME_ID, 
				// 	sen_time.SEN_ID, sen_calc.SEN_CALC from sen_calc, 
				// 	sen_time where sen_time.ID = sen_calc.TIME_ID and sen_time.SEN_ID=? order by sen_time.ID desc limit 10",
				// 	data, function(query_err, result){

					connection.release();

					if(query_err){
						console.log(query_err);
						return callback(query_err, null);
					}
					else {
						console.log(result);
						return callback(null, result);
					}
				});

			}
			
		});

	}
		

	/** Handling error in connection with database **/
	function checkSQLConnection(err, connection){
		if (err) {
			connection.release();
			return new Error('Error in database connection');	
		}
	}

	/** exposes funtions to be used in app.js **/
	module.exports = {
		temperatureData: temperatureData
	};
	
})();
	




