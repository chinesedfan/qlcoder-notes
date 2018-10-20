const http = require('http');
const url = require('url');

const cache = {}; // in memory

http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    const name = parsed.query.registerusername;

    console.log(req.url, name, cache[name]);

    if (cache[name]) {
        res.end('already used');
    } else {
        cache[name] = 1;
        res.end('register success');
    }
}).listen(8080);
