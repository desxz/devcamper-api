const express = require('express');
const { getReviews } = require('../controllers/reviews');
const Review = require('../models/Review');
const router = express.Router({mergeParams: true});
const Bootcamp = require('../models/Bootcamp');

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.route('/').get(advancedResults(Review, {
    path: 'bootcamp',
    select: 'name description'
    }), getReviews
);

module.exports = router;