// async // sync

const fs = require('fs');

fs.readFile('../Day-1/Call.js', 'utf-8', (err, data) => {
    if (err) {
        console.log('err',err);
    }
    console.log('data', data);
    
});


// create

fs.writeFileSync('./note.txt', 'hello');

fs.writeFile('./note.txt', '\n mehfooz khan', (err, data) => {
    if (err) {
        console.log('err',err);
        
    }
    console.log('write data function', data);
    
});

// update  [append] 
// fs.appendFile('./note.txt', '\nhello world', (err) => {
//     if ( err) {
//         console.log(err);
        
//     }
// });
