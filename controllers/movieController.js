//THE BRAINS
const axios = require('axios');
const OMDB_URL = 'http://www.omdbapi.com/'; // OMDb base URL from the assignment
// ---------- SEARCH: GET /api/search?title=batman ----------
const searchMovies = async (req, res) => {
try {
// Read the ?title=... part of the URL
const { title } = req.query;
// No title means the CLIENT made a mistake -> 400 Bad Request
if (!title) {
return res.status(400).json({ error: 'Title query parameter is required' });
}
// Call OMDb. 's' = search term, 'apikey' = our secret from .env.
// axios builds the ?s=...&apikey=... string for us and URL-encodes it.
const response = await axios.get(OMDB_URL, {
params: { s: title, apikey: process.env.OMDB_API_KEY },
});
// response.data is the JSON body OMDb sent back; pass it along to our client
return res.json(response.data);
} catch (error) {
// Network down, OMDb unreachable, etc. -> the SERVER side failed -> 500
console.error('Search error:', error.message);
return res.status(500).json({ error: 'Failed to fetch movies from OMDb' });
}
};
// ---------- DETAILS: GET /api/movies/:id ----------
const getMovieDetails = async (req, res) => {
try {
// Read the :id from the URL path, e.g. tt0372784
const { id } = req.params;
// 'i' = IMDb ID lookup in OMDb
const response = await axios.get(OMDB_URL, {
params: { i: id, apikey: process.env.OMDB_API_KEY },
});
return res.json(response.data);
} catch (error) {
console.error('Details error:', error.message);
return res.status(500).json({ error: 'Failed to fetch movie details from OMDb' });
}
};
// Export both so the router can import them
module.exports = { searchMovies, getMovieDetails };