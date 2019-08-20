var express = require('express');
var router = express.Router();
var moviesCtrl = require('../controllers/api/movies');

router.get('/movies', moviesCtrl.index);
router.get('/movies/new', moviesCtrl.new);
router.get('/movies/:id', moviesCtrl.show);
router.post('/movies', moviesCtrl.create);
router.put('/movies/:id', moviesCtrl.update)

module.exports = router;
