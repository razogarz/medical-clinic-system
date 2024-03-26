import db from "../db/conn.mjs";
import cors from 'cors';
import express from 'express';
import { validationResult } from 'express-validator';
import { createPatientValidator } from '../validators.mjs';
const router = express.Router();
router.use(cors());
router.get('/', async (req, res) => {
    let collection = await db.collection('Patients');
    let results = await collection.find({})
        .toArray();
    res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
    let collection = await db.collection('patients');
    //IF IT IS NOT WORKING TRY TO CHANGE LINE BELOW
    let query = {id: req.params.id};
    let results = await collection.findOne(query);
    if(!results) {
        res.send('Patient not found').status(404);
        return;
    }
    res.send(results).status(200);
});

router.post('/', createPatientValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).send({
            "status": "error",
            "message": "Invalid patient data"
        });
        return;
    }
    let collection = await db.collection('patients');
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});

router.patch('/:id', async (req, res) => {
    const query = {id: req.params.id};
    const updates = {$set: req.body};
    let collection = await db.collection('patients');
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
});

router.delete('/:id', async (req, res) => {
    const query = {id: req.params.id};
    let collection = await db.collection('patients');
    let result = await collection.deleteOne(query);
    res.send(result).status(200);
});

export default router;