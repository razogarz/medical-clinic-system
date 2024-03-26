import { MongoClient } from 'mongodb';
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);
let connection;
try {
    connection = await client.connect();
    console.log('MongoDB Connected');
} catch (e) {
    console.error('Error connecting to MongoDB', e);
}

let db = connection.db('MedicalCompany');
export default db;
