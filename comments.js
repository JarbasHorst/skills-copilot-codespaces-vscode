//Create web server
// 1. Import Express
const express = require('express');
// 2. Create web server
const app = express();
// 3. Listen to port 3000
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});

// 4. Create GET /comments
app.get('/comments', (req, res) => {
    res.send('GET /comments');
});

// 5. Create GET /comments/:id
app.get('/comments/:id', (req, res) => {
    res.send('GET /comments/:id');
});

// 6. Create POST /comments
app.post('/comments', (req, res) => {
    res.send('POST /comments');
});

// 7. Create PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

// 8. Create DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});