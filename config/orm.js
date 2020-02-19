const connection = require('./connection');


const orm = {
  selectAll: function(tableName){
    const queryString = 'SELECT * FROM ??';
    connection.query(queryString, [tableName], function(err, result){
      if(err) throw err;
      console.log(result)
    })
  },
  insertOne: function(tableName, columnName, value){
    const queryString = 'INSERT INTO ?? (??) VALUES (?)';
    connection.query(queryString, [tableName, columnName, value], function(err, result){
      if(err) throw err;
      console.log(result)
    })
  },
  updateOne: function(tableName, columnName, newValue, id){
    const queryString = 'UPDATE ?? SET ??=? WHERE id=?';
    connection.query(queryString, [tableName, columnName, newValue, id], function(err, result){
      if(err) throw err;
      console.log(result)
    })
  }
}

module.exports = orm;

