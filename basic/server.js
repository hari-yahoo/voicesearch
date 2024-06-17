const fs = require('fs');
const https = require('https');
const express = require('express');
const app = express();

// Load the self-signed certificate and key
const options = {
    key: fs.readFileSync('localhost.key'),
    cert: fs.readFileSync('localhost.crt')
};

app.get('/', (req, res) => {
    res.send('Hello HTTPS World!');
});

// Create HTTPS server
https.createServer(options, app).listen(3000, () => {
    console.log('HTTPS server running on https://localhost:3000');
});
