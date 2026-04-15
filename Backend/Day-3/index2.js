const http = require('http');
const fs =  require('fs');

const PORT = 7080;

const server = http.createServer((req, res) => {
    console.log('req',req.url);
    if (req.url === '/notes') {
        res.setHeader('Content-Type', 'text/html');
        res.end('<i> hello world</i>');
    } else if (req.url === '/data') {
        let data = fs.readFileSync('./index.html', {encoding: 'utf-8'});
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    } else {
        res.end('please select any path');
    }
});

server.listen(PORT, () => {
    console.log('the port is running on ${PORT}');
    
});