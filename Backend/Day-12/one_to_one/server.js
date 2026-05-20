const express = require('express');

require('dotenv').config();

const { Connection } = require('./config/db');
const { Connection } = require('./routes/student.routes');
const { Connection } = require('./routes/trainer.routes');

const app = express();

// middle ware

app.use(express.json());

// Route

app.use('/student, studentRoutes');
app.use('/student, trainerRoutes');

app.listen(process.env.PORT, async () =>{
    try {
        await Connection;
        console.log('DB is successfully connected');
    } catch (err) {
        console.log('DB is failed to connect');
        
    } finally {
        console.log(`port is running on ${process.env.Port}`);
        
    }
});