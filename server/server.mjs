import express from 'express';
import "./loadEnvirontment.mjs";
import patients from './routes/patients.mjs';

const app = express();
app.use("/patients", patients)
const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
