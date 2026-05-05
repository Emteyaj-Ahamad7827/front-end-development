const express = require('express');

const studentRoutes = express.Routes();

studentRoutes.get('/', (req, res) =>{
    res.send('student home page');
});

studentRoutes.get('/allData', (req, res) =>{
    res.send('student all Data');

});

studentRoutes.get('/student_boy', (req, res) =>{
    res.send('only boy student name.....');
});
studentRoutes.get('/student_boy', (req, res) =>{
    let std_id = req.params.id;
    res.send(`student id is $(std_id)`);
});

module.exports = { studentRoutes };
