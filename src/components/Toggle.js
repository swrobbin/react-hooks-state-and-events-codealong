import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  function clickHandler(){
    setIsOn(!isOn)
  }


  return (
  
  <button onClick={clickHandler} >{isOn ? "ON" : "OFF"}</button>
  )
}

export default Toggle;
