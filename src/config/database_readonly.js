var mysql = require('mysql');
var db_info = {
    host: '10.0.2.233',
    port: '3306',
    user: 'examuser',
    password: 'pwd123pwd',
    database: 'db_test'
}

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql connection error : ' + err);
            else console.log('mysql is connected successfully!');
        });
    }
}
