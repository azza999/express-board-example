const mysql = require('mysql');
var db_info = {
	host: 'localhost',
	port: '3306',
	user: 'web',
	password: 'bks',
	database: 'express_board'
}

const DBcon = {
	query: function(sql, callback) {
		console.log(sql)
		let connection = mysql.createConnection(db_info);

		connection.connect(function(err) {
			if(err) console.log('error')
		})
		
		return connection.query(sql, callback)
	},
}

module.exports = DBcon;