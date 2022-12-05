const express = require('express');
const app = express();
app.use(express.json());

const ratings = [
    { asin: "ABCDE", rating: 5, count: 100 },
    { asin: "XYZAB", rating: 6, count: 200 },
];

//READ Request Handlers

app.get('/', (req, res) => {
    console.log('=== GET request  at / ===');
    res.sendFile('./ping.html', { root: __dirname });
});

app.get('/ping', (req, res) => {
    console.log('=== GET request  at /ping ===');
    res.sendFile('./ping.html', { root: __dirname });
});


app.get('/api/ratings', (req, res) => {
    console.log('=== GET request  at /api/ratings ===');
    res.send(ratings);
});

app.get('/api/ratings/ping', (req, res) => {
    console.log('=== GET request  at /api/ratings/ping ===');
    res.sendFile('./ping.html', { root: __dirname });
});

app.get('/api/ratings/:asin', (req, res) => {
    const rating = ratings.find(rating => rating.asin === req.params.asin);
    console.log('=== GET request  at /api/ratings/{asin} ===');
    if (!rating) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(rating);
});


//PORT ENVIRONMENT VARIABLE
// const port = process.env.PORT || 80;
const port = 80;
app.listen(port, '0.0.0.0', () => console.log(`Listening on port ${port}..`));