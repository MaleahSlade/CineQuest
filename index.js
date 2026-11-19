// FRONT DOOR
import 'dotenv/config';
import express from 'express';

// Your Routes
import movieRoutes from './routes/movieRoutes.js';

// Create the Express App
const app = express();

const PORT = process.env.PORT || 3000;

// Mount the router under /api
// Router's '/search' becomes '/api/search'; '/movies/:id' becomes '/api/movies/:id'
app.use('/api', movieRoutes);

// Start listening for requests and log so we know it's alive
app.listen(PORT, () => {
    console.log(`CineQuest running in port ${PORT}`);
});
