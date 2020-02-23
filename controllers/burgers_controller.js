const express = require('express');
const router = express.Router();

// Import the model to use its database functions.
const burger = require('../models/burger');
const orm = require('../config/orm')

router.get('/', function(req, res){
  const select = orm.selectAll()

  select
    .then(function(data){ 
      res.render('index', {burgers: data})
    })
})

module.exports = router;