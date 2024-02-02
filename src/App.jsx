
import './App.css'


import React, { useEffect, useState } from 'react'
import Search from './Components/Search'
import WeatherFocus from './Components/WeatherFocus';
import { getCity } from './assets/index.js';


const App = () => {

 

  return (
    <div>
      <Search serchText ={searchData} onChange ={handleChange} onKeyDown ={onkeydown} />
      <WeatherFocus/>     
      <Daily-card/>
      
      
      </div>
  )
}

export default App;
