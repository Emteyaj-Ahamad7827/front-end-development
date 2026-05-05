const express = require('express');
const fs = require('fs');

const PORT = 7000;

const server = express();

// ex-1 watchman middleware
const watchman = (req, res, next) =>{
    if (3 + 5 == 6) {
        res.send('Bye');
        console.log('watchman middleware, if block invoked');
        
    } else {
        next();
        console.log('watchman middleware, else block and after next function invoke');
        
    }
};

// ex-2 auth middleware
const auth = (req, res, next) =>{
    const auth = true;
    if (!auth) {
        res.send('Bye you are not authorized');
        console.log('auth middleware, if block invoked');
        
    } else {
        next();
        console.log('auth middleware, else block and after next function invoke');
        
    }
};

server.use(watchman, auth);

server.get('/', (req, res) =>{
    console.log('home');
    res.send('home');
});

server.get('/notes', (req, res) =>{
    const fsData = fs.readFileSync('../Day-5/data.json', 'utf-8');
    console.log('fsData',fsData);
    console.log('e');
    
    res.send(fsData);
});


// start server part


server.listen(PORT,() =>{
    console.log(`server is running on ${PORT}`);
    
});