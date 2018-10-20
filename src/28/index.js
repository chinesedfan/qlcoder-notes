const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const parsed = url.parse(req.url, true);
    const a = +parsed.query.a;
    const b = +parsed.query.b;

    console.log(req.url, a, b);
    res.end(String(a * b));
}).listen(8080);
