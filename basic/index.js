const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})
app.get('/search', (req, res) => {
    const query = req.query.query;
    // Perform search logic (e.g., database query, search API call)
    const results = performSearch(query); // Replace with actual search logic
    res.json(results);
});

function performSearch(query) {
    // Replace with actual search logic
    // Example: Mock search results
    return [
        { title: 'Result 1', description: 'Description for result 1' },
        { title: 'Result 2', description: 'Description for result 2' },
    ];
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})