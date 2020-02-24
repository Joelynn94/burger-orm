const express = require('express');
const router = express.Router();

// Import the model to use its database functions.
const burger = require('../models/burger');
const orm = require('../config/orm')

router.get('/', function(req, res){
  const selectAllBurgers = orm.selectAll()

  selectAllBurgers
    .then(function(data){ 
      res.render('index', { burgers: data })
    })
})

router.post('/', function(req, res){
  const postBurger = orm.insertOne(req.body.burger_name);

  postBurger 
    .then(function(data){
      res.json({ 
        id: data,
      })
    })
})

router.put('/:id', function(req, res){
  const eat = orm.updateOne(true, req.params.id)

  eat
    .then(function(data){
      res.status(200).end()
    })
})

module.exports = router;