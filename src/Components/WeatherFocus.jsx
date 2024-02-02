import React from "react";
import "./WeatherFocus.css";


const WeatherFocus = () => {
  return (
    <>
      <div className="weather">
        <img src='/'></img>
        <div className="content">
          <p>Today</p>
          <h1>NEW YORK</h1>
          <h6>Temperature : 17C</h6>
          <h6>Clear Sky</h6>
        </div>
      </div>
    </>
  );
};

export default WeatherFocus;
