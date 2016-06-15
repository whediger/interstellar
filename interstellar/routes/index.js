var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('propulsion').select().then(function(props) {
    res.render('index', { list:props });
  })

});

router.get('/create', function(req, res, next) {
  res.render('create');
})

router.get('/:id', function (req, res, next) {
  knex('propulsion').where({id: req.params.id}).first().then(function(propulsion) {
    res.render('detail', {propulsion:propulsion})
  })
})

router.get('/:id/delete', function(req, res, next) {
  knex('propulsion').where({id: req.params.id}).del().then(function () {
    res.redirect('/');
  })
})

router.get('/:id/edit', function (req, res, next) {
  knex('propulsion').where({id: req.params.id}).first().then(function (propulsion) {
    res.render('edit', {propulsion:propulsion})
  })

})
//
router.post('/:id/edit', function (req, res, next) {
  knex('propulsion').where({id: req.params.id}).update(req.body).then(function () {
    res.redirect('/' + req.params.id);
  })
})

router.post('/create', function (req, res, next) {
  knex('propulsion').insert(req.body).then(function () {
    res.redirect('/');
  })
})

module.exports = router;
