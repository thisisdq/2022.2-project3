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