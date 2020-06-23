import express from 'express';
var w1 = "World"

const app = express();

app.get('/', (req, res) => {
    res.send(`Hello ${w1}!`);
});

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);