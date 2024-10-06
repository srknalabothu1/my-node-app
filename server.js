const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const { DB_URI } = require('./config/db');

const app = express();
const PORT = 'https://ecoprawnnodebe-ks53.vercel.app';

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});