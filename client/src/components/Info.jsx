import React from 'react'
import Time from './Time'
import WeatherSnap from './WeatherSnap'

const Info = (props) => {
    return (React.createElement("div", { id: props.id, className: "info" },React.createElement(Time, null),
    React.createElement(WeatherSnap, null)
    ));
};

export default Info
