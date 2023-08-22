import React from "react";
import MenuSection from "../MenuSection/MenuSection";
import classNames from "classnames";
import { fetchData , changeLED } from "../../api/api.js";


var DeviceType = {
    LED: "LED",
    INFRARED : "INFRARED",
    TEMPERATURE: "TEMPERATURE",
    HUMIDITY: "HUMIDITY"
  };

const IOTController = () => {
    const [temperature, setTemperature] = React.useState(null)
    const [humidity, setHumidity] = React.useState(null)
    const [infrared, setInfrared] = React.useState(null)
    const [LEDStatus, setLEDStatus] = React.useState(null)
  React.useEffect(() => {
    const updateData = async () => {
      const newData = await fetchData();
      setTemperature(newData.temperature.value);
      setHumidity(newData.humidity.value);
      setInfrared(newData.infrared.value);
      setLEDStatus(newData.LED.Status);
    }
    updateData();
    const interval = setInterval(updateData, 1000);
    return () => clearInterval(interval);
  },[]);


  const DeviceInfo = [{
    id: 1,
    icon: "fa-solid fa-temperature-full",
    type: DeviceType.TEMPERATURE,
    value: temperature,
    }, 
{
    id: 2,
    icon: "fa-solid fa-droplet",
    type: DeviceType.HUMIDITY,
    value: humidity
},
{
    id: 3,
    icon: "fa-solid fa-person-circle-check" ,
    type: DeviceType.INFRARED,
    style: {color: infrared ? "#00ff00" : "#000000"},
    value: infrared
}, 
{
    id: 4,
    icon: (LEDStatus === "ON") ? "fa-solid fa-toggle-on" : "fa-solid fa-toggle-off" ,
    style: {color: LEDStatus == "ON" ? "#00ff00" : "#000000"},
    type: DeviceType.LED,
    value: LEDStatus
}]
const handleClickLED = async () => {
    await changeLED()
}

    const getTools = () => {
        return DeviceInfo.map((device) => {
            switch (device.type) {
                case DeviceType.TEMPERATURE:
                    return (React.createElement("div", { key: device.id, className: "device-card" },
                React.createElement("div", { className: "device-card-background background-image"}),
                React.createElement("div", { className: "device-card-content" },
                    React.createElement("div", { className: "device-card-content-header" },
                        React.createElement("span", { className: "device-card-name" }, device.type)),
                    React.createElement("i", { className: classNames(device.icon, "device-card-icon" ) },
                        React.createElement("span", { className: "device-card" },device.value,
                        React.createElement("span", {},"\xB0C"))))));
                case DeviceType.HUMIDITY: 
                return (React.createElement("div", { key: device.id, className: "device-card" },
                React.createElement("div", { className: "device-card-background background-image"}),
                React.createElement("div", { className: "device-card-content" },
                    React.createElement("div", { className: "device-card-content-header" },
                        React.createElement("span", { className: "device-card-name" }, device.type)),
                    React.createElement("i", { className: classNames(device.icon, "device-card-icon" ) },
                        React.createElement("span", { className: "device-card" },device.value,
                        React.createElement("span", {}," %"))))));
                
                case DeviceType.INFRARED:
                    return (React.createElement("div", { key: device.id, className: "device-card" },
                React.createElement("div", { className: "device-card-background background-image"}),
                React.createElement("div", { className: "device-card-content" },
                    React.createElement("div", { className: "device-card-content-header" },
                        React.createElement("span", { className: "device-card-name" }, device.type)),
                    React.createElement("i", { className: classNames(device.icon, "device-card-icon"), style: device.style},
                        React.createElement("span", { className: "device-card" })))));
                case DeviceType.LED:
                    return (React.createElement("div", { key: device.id, className: "device-card" , onClick:handleClickLED},
                React.createElement("div", { className: "device-card-background background-image"}),
                React.createElement("div", { className: "device-card-content" },
                    React.createElement("div", { className: "device-card-content-header" },
                        React.createElement("span", { className: "device-card-name" }, device.type)),
                    React.createElement("i", { className: classNames(device.icon, "device-card-icon"), style: device.style },
                        React.createElement("span", { className: "device-card" }, device.value)))));
                default:
                    break;
            }
        });
    };
    return (React.createElement(MenuSection, { icon: "fa-solid fa-house-signal", id: "devices-section", title: "Wireless Controlls Smart House" }, getTools()));
};
export default IOTController