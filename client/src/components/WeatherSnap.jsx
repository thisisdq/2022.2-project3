import React from 'react'
// var WeatherType;

// (function (WeatherType) {
//     WeatherType["Cloudy"] = "Cloudy";
//     WeatherType["Rainy"] = "Rainy";
//     WeatherType["Stormy"] = "Stormy";
//     WeatherType["Sunny"] = "Sunny";
// })(WeatherType || (WeatherType = {}));


// const Weather = () => {
//     const getDays = () => {
//         return [{
//                 id: 1,
//                 name: "Mon",
//                 temperature: N.rand(60, 80),
//                 weather: WeatherType.Sunny
//             }, {
//                 id: 2,
//                 name: "Tues",
//                 temperature: N.rand(60, 80),
//                 weather: WeatherType.Sunny
//             }, {
//                 id: 3,
//                 name: "Wed",
//                 temperature: N.rand(60, 80),
//                 weather: WeatherType.Cloudy
//             }, {
//                 id: 4,
//                 name: "Thurs",
//                 temperature: N.rand(60, 80),
//                 weather: WeatherType.Rainy
//             }, {
//                 id: 5,
//                 name: "Fri",
//                 temperature: N.rand(60, 80),
//                 weather: WeatherType.Stormy
//             }, {
//                 id: 6,
//                 name: "Sat",
//                 temperature: N.rand(60, 80),
//                 weather: WeatherType.Sunny
//             }, {
//                 id: 7,
//                 name: "Sun",
//                 temperature: N.rand(60, 80),
//                 weather: WeatherType.Cloudy
//             }].map((day) => {
//             const getIcon = () => {
//                 switch (day.weather) {
//                     case WeatherType.Cloudy:
//                         return "fa-duotone fa-clouds";
//                     case WeatherType.Rainy:
//                         return "fa-duotone fa-cloud-drizzle";
//                     case WeatherType.Stormy:
//                         return "fa-duotone fa-cloud-bolt";
//                     case WeatherType.Sunny:
//                         return "fa-duotone fa-sun";
//                 }
//             };
//             return (React.createElement("div", { key: day.id, className: "day-card" },
//                 React.createElement("div", { className: "day-card-content" },
//                     React.createElement("span", { className: "day-weather-temperature" },
//                         day.temperature,
//                         React.createElement("span", { className: "day-weather-temperature-unit" }, "\u00B0F")),
//                     React.createElement("i", { className: classNames("day-weather-icon", getIcon(), day.weather.toLowerCase()) }),
//                     React.createElement("span", { className: "day-name" }, day.name))));
//         });
//     };
//     return (React.createElement(MenuSection, { icon: "fa-solid fa-sun", id: "weather-section", scrollable: true, title: "How's it look out there?" }, getDays()));
// };

// const N = {
//     clamp: (min, value, max) => Math.min(Math.max(min, value), max),
//     rand: (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
// };




function WeatherSnap() {
  return (
    <div>WeatherSnap</div>
  )
}

export default WeatherSnap