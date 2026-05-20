const express = require('express');
const { trainertModel } = require('./model/trainer.model');

const trainerRoutes = express.Router();

// read path="/student/"

trainerRoutes.get('/', async(req, res) =>{
    const trainerData = await trainerModel.find();

    res.send({ msg: `all trainer data` , data: trainerData});
});

trainerRoutes.post('/createtrainer', async(req, res) =>{
    const trainerData = new trainerModel(req.body);

    await trainerDataSet.sava();

    res.send(trainerDataSet);

});

// update
trainerRoutes.get('/', (req, res) =>{});

trainerRoutes.get('/', (req, res) =>{});

module.exports = { trainerRoutes };