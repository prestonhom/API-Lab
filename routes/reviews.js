var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/api/reviews');

router.post('/movies/:id/reviews', reviewsCtrl.create);

module.exports = router;