const mysql = require('mysql');

// Sets up mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'burgers_DB'
})

// Make connection to database 
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }

  console.log('connected as id ' + connection.threadId)
});

// Export connection for ORM to use.
module.exports = connection;