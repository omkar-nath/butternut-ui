import React, { useState } from "react";
import { BlockPicker, ColorChangeHandler, ColorResult } from "react-color";

function ColorPicker() {
  const [color, setColor] = useState("#2CCCE4");
  const handleChange: ColorChangeHandler = (color: ColorResult) => {
    console.log("Color", color);
    setColor(color.hex);
  };
  return <BlockPicker color={color} onChange={handleChange} />;
}

export default ColorPicker;
