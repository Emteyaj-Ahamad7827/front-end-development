import http from 'http';

import fs from 'fs';

const PORT = 7090;

const server = http.createServer((req, res) => {
    // only with the eventEmmiter

    let chunks = '';
    if (req.url === '/notes') {
        req.on('data', (chunk) =>{
            chunks += chunk;
        });
        req.on('end', () =>{
            console.log(chunks);
            
        });
        res.end('data found');

    } else if (req.url === '/movie') {
        let movieStream = fs.createReadStream('../Day-2/index.js', 'utf-8');
        res.setHeader('Content-Type', 'text/html');

        console.log('movieStream',movieStream);
        movieStream.pipe(res);
    }
    else {
       res.end('invalid parameter please check the url');
}
});

server.listen(PORT,  () =>{
    console.log('port has been start on ${PORT');
    
});