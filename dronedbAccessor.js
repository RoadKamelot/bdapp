(function() {

var mysql = require('mysql');
	/** 
		Create connection for mysql 
	**/
	//db config here.
	var dbconfig = {
		connectionLimit: 100,
		debug: false,
		host: process.env.DB_URL,
		user: process.env.USER,
		password: process.env.PASSWORD,
		database: process.env.DB
	};
	console.log(dbconfig.host);
	console.log(dbconfig.user);
	console.log(dbconfig.password);
	console.log(dbconfig.database);

	

	var pool = mysql.createPool(dbconfig);
/* query temperature data from db */
	function temperatureData (callback){
		// pool.getConnection(function(err, connection){ // where 'sen_time.ID' = 'sen_calc.ID' //'sen_time',
		// 	console.log('pool connection: '+err);
		// 	var connectionError = checkSQLConnection(err, connection); //check if there is error in connection to db.
		// 	if(connectionError){
		// 		return;
		// 	}
		// 	else {
		// 		//time sort desc, get 20
		// 		connection.query("select sen_calc.SEN_TIME, sen_calc.SEN_CALC , sen_calc.Units from sen_calc where sen_calc.SEN_TIME like '2015-05-22 12:00:03%' limit 1000", function(query_err, result){
		// 			connection.release();

		// 			if(query_err){
		// 				console.log(query_err);
		// 				return callback(query_err, null);
		// 			}
		// 			else {
		// 				console.log(result);
		// 				return callback(null, result);
		// 			}
		// 		});

		// 	}
			
		// });

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
		temperatureData: temperatureData,
	};
	
})();