var express = require('express'),
    http = require('http'),
    redis = require('redis');

var app = express();

console.log(`${process.env.REDIS_PORT_6379_TCP_ADDR}:${process.env.REDIS_PORT_6379_TCP_PORT}`);

var client = redis.createClient(6379, 'localhost');

app.get('/', (req, res, next) => {
    client.incr('counter', (err, counter) => {
        if (err)
            return next(err);
        res.send(`This page has been viewed '1' times!\n`)
    });
});

const port = process.env.PORT || 8080;

http.createServer(app).listen(port, () => {
    console.log(`Listening on port ${port}`)
})
