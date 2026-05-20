const express = require('express');

require('dotenv').config();

const { Connected } = require('./config/db');
const { studentRoutes } = require('./routes/student.routes');
const { trainerRoutes } = require('./routes/trainer.routes');

const app = express();

// middle ware

app.use(express.json());

// Route

app.use('/student, studentRoutes');
app.use('/trainer, trainerRoutes');

app.listen(process.env.Port, async () =>{
    try {
        await Connected;
        console.log('DB is successfully connected');
    } catch (err) {
        console.log('DB is failed to connect');
        
    } finally {
        console.log(`port is running on ${process.env.Port}`);
        
    }
});