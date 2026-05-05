const express = require('express');

const fs = require ('fs');

let PORT = 7000;

let app = express();

// middle ware
app.use(express.json());
app.use(express.text());

// read

app.get('/', (req, res) =>{
    res.send('hii');
});

app.post('/create_note', (req, res) =>{
    fs.writeFile('./data.json', JSON.stringify(req.body), (err) =>{
        if (err) {
            console.log(err);
            
        }
    });
    res.end(`done the file has been created by this value -> ${JSON.stringify(req.body)}`,)
});



//app.post('/notesCreate);
//app.delete('/notesDelete);
//app.patch('/notesEdit);
//app.put('/changeAll);
// local host:'127.0.0.1'

// update
// delete

app.listen(PORT,'127.0.0.1', () =>{
    console.log('port is running on ${PORT}');
    
});