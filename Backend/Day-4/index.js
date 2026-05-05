const http = require('http');

const fs = require('fs');

const { Buffer } = require('node:buffer');
// const { buffer } = require('node:stream/consumers');

const server = http.createServer((req, res) =>{
    if (req.url === '/notes') {

        req.on('data', (chunk) =>{
            const buf = Buffer.from(chunk);

            fs.writeFile('note.txt', buf , (err) => {
                if (err) {
                    console.log(err);
                    
                }

            });
            fs.readFile('./note.txt', 'utf-8', (err, data) => {
                if (err) {
                    console.log('err',err);
                }
                console.log('data', data);
                
            });
        });
    } 
        res.end('please select path');
    
});

server.listen(7080, () => {
    console.log('server is running');
    
});
