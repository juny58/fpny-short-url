const http = require('http');
const urlMap = require('./url-map.json')

const port = process.env.PORT || 3100;

const server = http.createServer((req, res) => {
    const url = urlMap[req.url] || urlMap['/']
    res.writeHead(301,
        { Location: url }
    );
    res.end();
});

server.listen(port, () => {
    console.log(`Server running at ${port}`);
});