//FRONT DOOR
require('dotenv').config();

const express = require('express');
//Your Routes
const movieRoutes = require('./routes/movieRoutes'); 
//Create the Express App
const app = express();

const PORT = process.env.PORT  || 3001

//Mount the router under /api
// Router's '/search' becomes '/api/search'; '/movies/:id' becomes '/api/movies/:id'
app.use('/api', movieRoutes);

//Start listening for requests and log so we know it's alive 
app.listen(PORT, () => {
    console.log('CineQuest API run running at http://localhost:${PORT}');
});

