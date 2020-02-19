const orm = require('../config/orm');

const burger = {
  selectAll: function() {
    orm.selectAll('burgers', function(res) {
      console.log(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals) {
    orm.create('burgers', cols, vals, function(res) {
      console.log(res);
    });
  },
  updateOne: function(objColVals, condition) {
    orm.update('burgers', objColVals, condition, function(res) {
      console.log(res);
    });
  }
};

module.exports = burger;
