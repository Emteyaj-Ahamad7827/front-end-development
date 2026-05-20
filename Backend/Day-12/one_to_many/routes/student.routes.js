const express = require('express');

const { studentModel } = require('../model/student.model');
const { trainerModel } = require('../model/trainer.model');

const studentRoutes = express.Router();

studentRoutes.get('.', async (req, res) =>{
    try {
        const findTrainer = await trainerModel.find({ tech_stack: req.body.batch});
        console.log('findTrainer',findTrainer);
        
        const studentData = await studentModel.create({
            ...req.body,
            trainer_ID: findTrainer[0]._id,
        });
        res.send({ student: studentData, trainer: findTrainer});
    } catch (err) {
        console.log('error',error);
        
    }
});

module.exports = { studentRoutes };