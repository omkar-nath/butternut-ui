import React, { useState,useEffect } from "react";
import { generateCustomTheme } from "./utils";

const ColorInput = () => {
  const [color, setColor] = useState("#800080");
  const [theme,setTheme]=useState({});

  useEffect(()=>{
    const generatedTheme=generateCustomTheme(color);
    setTheme(generatedTheme);
  },[color]);

  const handleChange = (event: any) => {
    if (event.type === "Enter") {
      setColor(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <label>Please enter color</label>
      <input onKeyDown={handleChange}></input>

      {JSON.stringify(theme, null, 2)}
    </React.Fragment>
  );
};


export default ColorInput;