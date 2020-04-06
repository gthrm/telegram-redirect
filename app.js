
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const http = require('http');
const serverPort = 80;

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.get('/:id', (req, res) => {
    console.log(`https://t.me/${req.params.id}?${req.query.start}`);
    send(req)
        .then(
            data => console.log('data', data) || res.send(data.data)
        )
        .catch(err => console.log(err))
});

function send(req) {
    const headers = { ...req.headers, host: 't.me' }
    return axios.get(`https://t.me/${req.params.id}?${req.query.start}`, { headers });
}

http.createServer(app).listen(serverPort, function () {
    console.log(`Express server listening on port ${serverPort}`);
});
