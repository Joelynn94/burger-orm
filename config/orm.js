const connection = require('./connection');

// orm object is a set of functions that make SQL queries 
const orm = {
  // method to query all columns from a table
  selectAll: function(tableName){
    const queryString = 'SELECT * FROM ??';

    // Creates a new promise to represent an async value. 
    // --starts in pending status  
    return new Promise((resolve, reject) => {
      connection.query(queryString, [tableName], function(err, result){
        //--reject if failed 
        if(err) {
          return reject(err)
        }
        //--resolve if succeded
        console.log(result)
        return resolve(result)
      })
    })

  },
  // method to insert a value into a table and column 
  insertOne: function(tableName, columnName, value){
    const queryString = 'INSERT INTO ?? (??) VALUES (?)';

    // Creates a new promise to represent an async value. 
    // --starts in pending status  
    return new Promise((resolve, reject) => {
      connection.query(queryString, [tableName, columnName, value], function(err, result){
        //--reject if failed 
        if(err) {
          return reject(err)
        }
        //--resolve if succeded
        console.log(result)
        return resolve(result)
      })
    })

  },
  // method to update a table and column based on a new value where the id exists
  updateOne: function(tableName, columnName, newValue, id){
    const queryString = 'UPDATE ?? SET ??=? WHERE id=?';

    // Creates a new promise to represent an async value. 
    // --starts in pending status 
    return new Promise((resolve, reject) => {
      connection.query(queryString, [tableName, columnName, newValue, id], function(err, result){
        //--reject if failed 
        if(err) {
          return reject(err)
        }
        //--resolve if succeded 
        console.log(result)
        return resolve(result)
      })
    })

  }
}

module.exports = orm;

