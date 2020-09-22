const express = require('express');
const connectDB = require('./config/db');

const app = express();

// CONNECT TO DB
connectDB();

// MIDDLEWARE
app.use(express.json({ extended: false }));

// LISTEN FOR SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));