var express = require('express');
var router = express.Router();

router.get('/array', function(req, res, next) {
    res.render('array', { mssg:''});
  });
  router.get('/math', function(req, res, next) {
    res.render('math', { mssg:''});
  });
  router.get('/binary', function(req, res, next) {
    res.render('binary', { mssg:''});
  });
  router.get('/strings', function(req, res, next) {
    res.render('strings', { mssg:''});
  });
  router.get('/bit', function(req, res, next) {
    res.render('bit', { mssg:''});
  });
  router.get('/two', function(req, res, next) {
    res.render('two', { mssg:''});
  });
  router.get('/ll', function(req, res, next) {
    res.render('ll', { mssg:''});
  });
  router.get('/saq', function(req, res, next) {
    res.render('saq', { mssg:''});
  });
  router.get('/bk', function(req, res, next) {
    res.render('bk', { mssg:''});
  });
  router.get('/hash', function(req, res, next) {
    res.render('hash', { mssg:''});
  });
  router.get('/ham', function(req, res, next) {
    res.render('ham', { mssg:''});
  });
  router.get('/tree', function(req, res, next) {
    res.render('tree', { mssg:''});
  });
  router.get('/dp', function(req, res, next) {
    res.render('dp', { mssg:''});
  });
  router.get('/greedy', function(req, res, next) {
    res.render('greedy', { mssg:''});
  });
  router.get('/graph', function(req, res, next) {
    res.render('graph', { mssg:''});
  });


  
  router.get('/que1', function(req, res, next) {
    res.render('que1', { mssg:''});
  });

  router.get('/number_of_length_n', function(req, res, next) {
    res.render('number_of_length_n', { mssg:''});
  });


  module.exports = router;  