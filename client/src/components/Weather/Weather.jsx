import React from "react";
import { fetchData } from "../../api/api.js";

const Weather = () => {
  const [temperature, setTemperature] = React.useState(null)
  React.useEffect(() => {
    const updateTemperature = async () => {
      const newData = await fetchData();
      setTemperature(newData.temperature.value);
    }
    updateTemperature();
    const interval = setInterval(updateTemperature, 1000);
    return () => clearInterval(interval);
  },[])
  
  
  return React.createElement(
    "span",
    { className: "weather" },
    React.createElement("i", { className: "weather-type fa-duotone fa-sun" }),
    React.createElement(
      "span",
      { className: "weather-temperature-value" },
      temperature
    ),
    React.createElement(
      "span",
      { className: "weather-temperature-unit" },
      "\u00B0C"
    )
  );
};

export default Weather;
