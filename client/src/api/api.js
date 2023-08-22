import axios from "axios";

const URL = "http://localhost:5000";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${URL}`);
    const data = response.data
    return data;
    
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export const changeLED = async () => {
  try {
    await axios.post(`${URL}/change/led`)
  } catch (error) {
    console.error("Error ChangeLEDStatus:", error);
  }
}