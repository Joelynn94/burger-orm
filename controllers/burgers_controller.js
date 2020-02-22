const express = require('express');
const router = express.Router();

// Import the model to use its database functions.
const burger = require('../models/burger');

router.get('/', function(req, res){
  burger.selectAll(function(){
    
  })
})

module.exports = router;