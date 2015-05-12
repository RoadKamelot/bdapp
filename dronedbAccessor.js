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
		password: process.env.PASSWORD ,
		database: process.env.DB

	};

	var pool = mysql.createPool(dbconfig);
/* query temperature data from db */
	function temperatureData (callback){
		pool.getConnection(function(err, connection){ // where 'sen_time.ID' = 'sen_calc.ID' //'sen_time',
			console.log('pool connection: '+err);
			var connectionError = checkSQLConnection(err, connection); //check if there is error in connection to db.
			if(connectionError){
				return;
			}
			else {
				//time sort desc, get 20
				connection.query("select sen_time.SEN_TIME, sen_calc.SEN_CALC , sen_calc.Units from sen_calc, sen_time where sen_time.ID = sen_calc.TIME_ID and (now() - sen_calc.SEN_TIME)>5 order by sen_time.SEN_TIME DESC", function(query_err, result){
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
		temperatureData: temperatureData,
	};
	
})();
	




