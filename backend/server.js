require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express();

// middleware
app.use(express.json());
// for using frontend and backend at same time 
app.use(cors());

// connecting to our DB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log('Connected to db & Listening on port', process.env.PORT);
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });