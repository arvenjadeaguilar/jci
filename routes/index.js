var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/careers', function(req, res, next) {
  res.render('careers', { title: 'Express' });
});
router.get('/consulting', function(req, res, next) {
  res.render('consulting', { title: 'Express' });
});
router.get('/position/be', function(req, res, next) {
  res.render('backend-engineer', { title: 'Express' });
});
router.get('/position/designer', function(req, res, next) {
  res.render('interface-designer', { title: 'Express' });
});
router.get('/position/vdesigner', function(req, res, next) {
  res.render('visual-designer', { title: 'Express' });
});
router.get('/position/manager', function(req, res, next) {
  res.render('product-manager', { title: 'Express' });
});
module.exports = router;
