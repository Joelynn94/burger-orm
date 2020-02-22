// Import MySQL connection.
const connection = require('./connection');

// orm object is a set of functions that make SQL queries 
const orm = {
  // method to query all columns from a table
  selectAll: function(){
    const queryString = 'SELECT * FROM burgers'

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
  insertOne: function(burgerName){
    const queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?,?)';

    // Creates a new promise to represent an async value. 
    // --starts in pending status  
    return new Promise((resolve, reject) => {
      connection.query(queryString, [burgerName, boolean], function(err, result){
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
  updateOne: function(id){
    const queryString = `UPDATE burger SET devoured=true WHERE id=${id}`;

    // Creates a new promise to represent an async value. 
    // --starts in pending status 
    return new Promise((resolve, reject) => {
      connection.query(queryString, [tableName, data, condition], function(err, result){
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

