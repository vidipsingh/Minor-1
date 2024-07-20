// require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/User')
// const workoutRoutes = require('./routes/workouts')

// express app
const app = express();

// // middleware
app.use(express.json());
// for using frontend and backend at same time 
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Minor-1")


app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user) {
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("The Password is incorrect")
            }
        } else {
            res.json("No record existed")
        }
    })
})

app.post('/register', (req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running");
})


// // connecting to our DB
// // mongoose.connect(process.env.MONGO_URI)
// //   .then(() => {
// //     app.listen(process.env.PORT, () => {
// //       console.log('Connected to db & Listening on port', process.env.PORT);
// //     });
// //   })
// //   .catch((error) => {
// //     console.error(error);
// //   });