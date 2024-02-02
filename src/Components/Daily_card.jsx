import React from "react";

const Daily_card = ({day, weatherImage, temperature}) => {
    
  return (
    <div className={`${day}`}>
      <h>{day}</h>
      <img src={weatherImage}></img>
      <p>{temperature}</p>
    </div>
  );
};

export default Daily_card;
