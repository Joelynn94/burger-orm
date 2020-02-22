const orm = require('../config/orm');

const burger = {
  selectAll: function() {
    orm.selectAll('burgers', function(res) {
      console.log(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burgerName) {
    orm.create('burgers', burgerName, function(res) {
      console.log(res);
    });
  },
  updateOne: function(itemId) {
    orm.update('burgers', itemId, function(res) {
      console.log(res);
    });
  }
};

module.exports = burger;
