const express = require('express');

const cors = require('cors');

const PORT = 7090;
const server = express();

server.use(
    cors({
        origin:['http://127.0.0.1:5500', '*'],
        // methods: 'GET',
        // optionsSuccessStatus: 201
    }),
);

server.get('/', (req, res ) =>{
    res.send('hello');
    
});
server.get('/notes', (req, res ) =>{
    res.send('data page');
    
});

// start server PORT

 server.listen(PORT,() =>{
    console.log(`server is running on ${PORT}`);
    
});