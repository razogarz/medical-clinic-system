import express from 'express';
import "./loadEnvirontment.mjs";
import patients from './routes/patients.mjs';
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use("/patients", patients)

const port = 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
