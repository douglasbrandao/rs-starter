const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello rsrs');
});

app.listen(3001);