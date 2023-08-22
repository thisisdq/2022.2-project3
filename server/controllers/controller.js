
// initial value
let data = {
    temperature: {
      value: -1,
      TimeUpdate: new Date()
    },
    humidity:{
      value: -1,
      TimeUpdate: new Date()
    },
    infrared: {
        value: false,
        TimeUpdate: new Date()
    },
    LED: {
      Status: "OFF",
      TimeUpdate: new Date()
    },
    PIN: {
      value: "1234",
      TimeUpdate: new Date()
    },
  }

export const getData = (req,res) =>{
    try {
        res.status(200).json(data);
      } catch (err) {
        res.status(500).json(err);
      }
}

export const updateTemperature = (req,res) => {
    try {
      const newTemperature = req.body.temperature;
      data.temperature.value = newTemperature;
      console.log(`Temperature updated be:`);
      console.log(data.temperature);
      data.temperature.TimeUpdate = new Date()
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
export const updateHumidity = (req,res) => {
    try {
      const newHumidity = req.body.humidity;
      data.humidity.value = newHumidity;
      console.log(`Humidity updated be:`);
      console.log(data.humidity);
      data.humidity.TimeUpdate = new Date()
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
export  const updateInfrared = (req,res) => {
    try {
      const newInfrared = req.body.infrared;
      data.infrared.value = newInfrared === "true";
      console.log(`Infrared updated successfully:`);
      console.log(data.infrared);
      data.infrared.TimeUpdate = new Date()
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }
export const setLEDStatus = (req,res) => {
    try {
      const newLEDStatus = req.body.LEDStatus;
      data.LED.value = newLEDStatus;
      console.log(`LEDStatus updated:`);
      console.log(data.LEDStatus);
      data.LEDStatus.TimeUpdate = new Date()
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  }

export const updateAll = (req, res) => {
    const newTemperature = req.body.temperature
    const newHumidity  = req.body.humidity
    const newLEDStatus = req.body.LEDStatus
    const newInfrared = req.body.infrared
    const date = new Date()
    data.temperature.value = newTemperature
    data.humidity.value = newHumidity
    data.LED.Status = newLEDStatus.toUpperCase()
    data.infrared.value = newInfrared
    data.temperature.TimeUpdate = date
    data.humidity.TimeUpdate = date
    data.LED.TimeUpdate = date
    data.infrared.TimeUpdate = date
    console.log("All Updated")
    res.json(data)
}

export const changeLED = (req,res) => {
  try {
    if(data.LED.Status === "OFF"){
    data.LED.Status = "ON"
    console.log(`LEDStatus updated:`);
    console.log(data.LED);
  }
  else (data.LED.Status = "OFF")
  res.json(data)
  } catch (error) {
    res.status(500).json(err);
  }
  
}

export const getLEDStatus = (req,res) => {
  try {
    res.json({ledStatus :data.LED.Status})
  } catch (error) {
    res.status(500).json(err);
  }
}