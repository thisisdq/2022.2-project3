import React from "react";


const getTemperature = () => {return -1}

const useCurrentTemperatureEffects = () => {
  const [temperature, setTemperature] = React.useState(-1)
  React.useEffect(() => {
    const invertal = setInterval (() => {
      const newTemperature = getTemperature();
      if (newTemperature !== temperature) {
        setTemperature(newTemperature);
      }
    },100)
    return () => clearInterval(invertal);
  },[temperature])
  return temperature
};

const Weather = () => {
  const temperature = useCurrentTemperatureEffects()
  return (
        React.createElement("span", { className: "weather" }, 
            React.createElement("i", { className: "weather-type fa-duotone fa-sun"}),
            React.createElement("span", { className: "weather-temperature-value" }, temperature),
            React.createElement("span", { className: "weather-temperature-unit" }, "\u00B0C")));
};

export default Weather;
