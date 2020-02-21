const connection = require('./connection');


const orm = {
  selectAll: function(tableName){
    const queryString = 'SELECT * FROM ??';

    return new Promise((resolve, reject) => {
      connection.query(queryString, [tableName], function(err, result){
        if(err) {
          return reject(err)
        }
        console.log(result)
        return resolve(result)
      })
    })

  },
  insertOne: function(tableName, columnName, value){
    const queryString = 'INSERT INTO ?? (??) VALUES (?)';

    return new Promise((resolve, reject) => {
      connection.query(queryString, [tableName, columnName, value], function(err, result){
        if(err) {
          return reject(err)
        }
        console.log(result)
        return resolve(result)
      })
    })

  },
  updateOne: function(tableName, columnName, newValue, id){
    const queryString = 'UPDATE ?? SET ??=? WHERE id=?';

    return new Promise((resolve, reject) => {
      connection.query(queryString, [tableName, columnName, newValue, id], function(err, result){
        if(err) {
          return reject(err)
        }
        console.log(result)
        return resolve(result)
      })
    })

  }
}

module.exports = orm;

