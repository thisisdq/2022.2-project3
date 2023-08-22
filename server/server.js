// import express from "express";
// import bodyParser from "body-parser";
// import dotenv from "dotenv";
// import  { MongoClient } from 'mongodb'

// dotenv.config()

// const app = express();
// const PORT = process.env.PORT || 5000;
// const URI = process.env.URI;

// app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: true }));


// app.get("/", function (req, res) {
//   console.log(5000);
//   res.send("OK");
// });

// app.post("/verify", function (req, res) {
//   console.log(req.body);
//   if (req.body.pin === result[1].PIN){
//     res.status(200).json({message: "PIN is valid",verify : true});
//   }
//   else {
//     res.status(200).json({message: "PIN is invalid"})
//   }
// })

// const client = await MongoClient.connect(
//   URI,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const coll = client.db('Project3').collection('SensorData');
// const result = await coll.find({}).toArray();
// console.log(result);
// // console.log(`PIN is : ${result[1].PIN}`);

// app.listen(PORT, () => {console.log(`Server running on ${PORT}`);})


//----------------------------------------------------------------

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import {getData, updateTemperature,updateHumidity,updateInfrared,setLEDStatus,updateAll, changeLED,getLEDStatus} from './controllers/controller.js';


dotenv.config()

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

app.get('/' , getData)

app.get('/getLEDStatus', getLEDStatus)

app.post('/update/LED', setLEDStatus )

app.post('/update/temperature', updateTemperature)

app.post('/update/humidity', updateHumidity)

app.post('/update/infrared', updateInfrared)

app.post('/update/all', updateAll)

app.post('/change/led' , changeLED)

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})