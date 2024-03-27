import db from "../db/conn.mjs";
import cors from 'cors';
import express from 'express';
import {body, validationResult} from 'express-validator';
import { createPatientValidator } from '../validators.mjs';
const router = express.Router();

const corsOptions = {
    origin: 'http://localhost:5173'
}
router.use(cors(corsOptions));

router.get('/', async (req, res) => {
    let collection = await db.collection('patients');
    let results = await collection.find({})
        .toArray();
    res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
    let collection = await db.collection('patients');
    //IF IT IS NOT WORKING TRY TO CHANGE LINE BELOW
    let query = {pesel: `${req.params.id}`};
    let results = await collection.findOne(query);
    console.log(results);

    if(!results) {
        res.send('Patient not found').status(404);
        return;
    }
    res.send(results).status(200);
});

router.post('/',  createPatientValidator, async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).send({
            "status": "error",
            "message": "Invalid patient data",
            "errors": errors.array()
        });
        return;
    }
    let collection = await db.collection('patients');
    //check if patient with such pesel exists
    let query = {pesel: req.body.pesel};
    let patient = await collection.findOne(query);
    if(patient) {
        res.send('Patient with such pesel already exists').status(400);
        return;
    }
    let newDocument = req.body;
    let result = await collection.insertOne(newDocument);
    res.send("Patient added").status(200);
});

router.patch('/:id',createPatientValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send({
            "status": "error",
            "message": "Invalid patient data",
            "errors": errors.array()
        });
        return;
    }
    const query = {pesel: req.params.id};
    const updates = {$set: req.body};
    let collection = await db.collection('patients');
    let result = await collection.updateOne(query, updates);
    if(result.matchedCount === 0) {
        res.send('Patient not found').status(404);
        return;
    }
    if(result.modifiedCount === 0) {
        res.send('Patient not modified').status(200);
        return;
    }
    res.send("Patient updated successfully").status(200);
});

router.delete('/:id', async (req, res) => {
    const query = {pesel: req.params.id};
    let collection = await db.collection('patients');
    let result = await collection.deleteOne(query);
    if(result.deletedCount === 0) {
        res.send('Patient not found').status(404);
        return;
    }
    res.send('Patient deleted').status(200);
});

export default router;