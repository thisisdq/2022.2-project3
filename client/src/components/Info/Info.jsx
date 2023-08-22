/* eslint-disable react/prop-types */
import React from "react";
import Time from "../Time/Time";
import Weather from "../Weather/Weather";


const Info = (props) => {

  return React.createElement(
    "div",
    { id: props.id, className: "info" },
    React.createElement(Time, null),
    React.createElement(Weather, {temperature: -1})
  );
};
export default Info;
