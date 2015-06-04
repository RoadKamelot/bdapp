(function() {

var mysql = require('mysql');
	/** 
		Create connection for mysql 
	**/
	//db config here.
	var dbconfig = {
		connectionLimit: 100,
		debug: false,
		host: process.env.MYSQLCONNSTR_URL ,
		user: process.env.MYSQLCONNSTR_USER ,
		password: process.env.MYSQLCONNSTR_PASSWORD ,
		database: process.env.MYSQLCONNSTR_DB
	};

	var pool = mysql.createPool(dbconfig);
/* query calculated data from calc_sen table */
	function calcData (callback){
		// callback(null, process.env);
		pool.getConnection(function(err, connection){ // where 'sen_time.ID' = 'sen_calc.ID' //'sen_time',
			console.log('pool connection: '+err);
			var connectionError = checkSQLConnection(err, connection); //check if there is error in connection to db.
			if(connectionError){
				return;
			}
			else {
				//select sen_calc.SEN_TIME, sen_calc.SEN_CALC , sen_calc.Units from sen_calc where sen_calc.SEN_TIME like '2015-05-22 12:00:03%' limit 1000
				connection.query("select sen_calc.sen_calc, sen_time.SEN_TIME, sen_calc.Units from sen_calc, sen_time where sen_calc.time_id = sen_time.id and sen_time.SEN_TIME like '2015-05-22 11:%'' order by sen_time.SEN_TIME asc", function(query_err, result){
					connection.release();

					if(query_err){
						console.log('Something wrong in querying from db',query_err);
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
		calcData: calcData,
	};
	
})();