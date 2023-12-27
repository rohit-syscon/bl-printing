const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const BLModel = require('./app/model');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://syscon:sysconLSS@cluster0.azodb4j.mongodb.net/sysDB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a route to get all BL documents
app.get('/api/bl', async (req, res) => {
  try {
    const blDocuments = await BLModel.find();
    res.json(blDocuments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Define a route to get a specific BL document by ID
app.get('/api/bl/:blId', async (req, res) => {
    try {
      const blDocument = await BLModel.findOne({ 'BL ID': req.params.blId });
      if (!blDocument) {
        return res.status(404).json({ message: 'BL document not found' });
      }
      res.json(blDocument);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
    

app.listen(port, () => {
  console.log('Listening on port', port);
});
