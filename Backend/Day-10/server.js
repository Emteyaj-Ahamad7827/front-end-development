
const express = require('express')
require('dotenv').config();

const { connection, userModel } = require('./db');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
// read
// app.get('/user', async (req, res) =>{
//     let userData = await userModel.find();
//     res.send({msg: 'data found', data: userData})
// });

// create
app.post('/userCreate', async (req, res) =>{
    let value = req.body;
    let userData = await userModel.insertOne(value);
    console.log('userData',userData);
    res.send({msg:'data created', data: userData})
});
app.listen(PORT, async() =>{
    try {
        await connection;
        console.log('DB is connected');
        
    } catch (error) {
        console.log(error);
        console.log('DB is disconnected');
        
        
    } finally {
        
        console.log(`server is running on ${PORT}`);
    }
    
});