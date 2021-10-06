const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a title for review'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    text: {
        type: String,
        required: [true, 'Please add a description'],
    },
    rating: {
        type: Number,
        min: [1, 'Rating must be at least 1'],
        max: [10, 'Rating cannot be more than 10'],
        required: [true, 'Please add a rating'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    bootcamp: {
        type: mongoose.Schema.ObjectId,
        ref: 'Bootcamp',
        required: true,
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: true,
    },
});



module.exports = mongoose.model('Review', ReviewSchema);