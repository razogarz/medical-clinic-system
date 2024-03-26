const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 5000;
const username = "esatto-db-user";
const password = "Qrrb2QpDV5mrqymT";
const dbUri = `mongodb+srv://${username}:${password}@esatto-medical-system.ka9quil.mongodb.net/?retryWrites=true&w=majority&appName=esatto-medical-system`;


// Connect to MongoDB
mongoose.connect(dbUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(r => console.log('Connected to MongoDB'))
    .catch(e => console.error('Error connecting to MongoDB', e));
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('MongoDB Connected');
});


// Middleware
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};


app.get('/api', cors(corsOptions), (req, res) => {
    res.send({"users": ["user1", "user2"]});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
