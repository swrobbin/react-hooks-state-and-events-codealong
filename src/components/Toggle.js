import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function clickHandler(){
    setIsOn(!isOn)
  }
const color = isOn ? 'red' : 'white';

  return (
  
  <button onClick={clickHandler} style={{color: color}}>{isOn ? "ON" : "OFF"}</button>
  )
}

export default Toggle;
