// async // sync

const fs = require('fs');

fs.readFile('../Day-1/Call.js', 'utf-8', (err, data) => {
    if (err) {
        console.log('err',err);
    }
    console.log('data', data);
    
});