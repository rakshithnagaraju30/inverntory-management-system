const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');



const { setServers } = require("node:dns");
setServers(["8.8.8.8", "1.1.1.1"]);




dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;




mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
      console.log('Connected to MongoDB');
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
  });
