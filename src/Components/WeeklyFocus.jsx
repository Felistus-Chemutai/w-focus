import React, { Fragment } from "react";
import { monday, sun, sarturday, cloudy } from "../assets";
import "./Display.css";
import Weather from "./WeatherFocus";
import Daily_card from "./Daily-card";

const WeeklyFocus = () => {
  const weathers = [
    {
      day: "Monday",
      temperature: 21,
      weatherImage: sun,
    },
    {
      day: "Tuesday",
      temperature: 21,
      weatherImage: sarturday,
    },
    {
      day: "Wednesday",
      temperature: 21,
      weatherImage: monday,
    },
    {
      day: "Thursday",
      temperature: 21,
      weatherImage: cloudy,
    },
    {
      day: "Friday",
      temperature: 21,
      weatherImage: sun,
    },
  ];
  return (
    <Fragment>
      <div className="dailyFocus">
    

        <div className="">
          {weathers.map((weather) => (
            <Daily_card
              day={weather.day}
              temperature={weather.temperature}
              weatherImage={weather.weatherImage}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default WeeklyFocus;
