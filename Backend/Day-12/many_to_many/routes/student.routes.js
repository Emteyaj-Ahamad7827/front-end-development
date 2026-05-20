const express = require('express');

const { studentModel } = require('../model/Students.model');
const { courseModel } = require('../model/Course.model');

const studentRoutes = express.Router();

studentRoutes.get('/', async (req, res) => {
    const studentData = await studentModel.find().populate('course');

    res.send(studentData);
});

studentRoutes.post('/createStudent', async (req, res) => {
    try {

        const studentData = await studentModel.create({
            ...req.body,
        });

        const courseID = await courseModel.findOne({
            course: studentData.course
        });

        studentData.course = courseID;

        await studentData.save();

        res.send({ student: studentData });

    } catch (err) {
        console.log('error', error);
        
    }
});

module.exports = {
    studentRoutes
};