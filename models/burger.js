const orm = require('../config/orm');

const burger = {
  selectAll: function() {
    orm.selectAll('burgers', function(res) {
      console.log(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(columnName, vals) {
    orm.create('burgers', columnName, vals, function(res) {
      console.log(res);
    });
  },
  updateOne: function(itemId, condition) {
    orm.update('burgers', itemId, condition, function(res) {
      console.log(res);
    });
  }
};

module.exports = burger;
