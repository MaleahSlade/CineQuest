const express = require('express');

//A mini-app that only holds routes 
const router = express.Router();

//Import the controller function
const { searchMovies, getMovieDetails } = require('../controllers/movieController');

//GET /api/search?title=batman -> run searchMovies
router.get('/search', searchMovies);

//GET /api/movies/tt0372784 -> run getMovieDetails
// ':id' is a placeholder; whatever is in that spot lands in req.params.id
router.get('/movies/:id', getMovieDetails);

//export so index.js can mount it
module.exports = router; 