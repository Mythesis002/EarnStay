const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to store data
app.post('/store-data', require('./functions/storedata'));

// Serve frontend files
app.use(express.static(path.join(__dirname, '/public')));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
