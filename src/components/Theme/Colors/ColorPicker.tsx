import React, { useState } from "react";
import { SketchPicker, ColorChangeHandler, ColorResult } from "react-color";

type Props={
  handleColorChange:(color:any)=>void
}

function ColorPicker({handleColorChange}:Props) {
  const [color, setColor] = useState("#0B57D0");
  const handleChange: ColorChangeHandler = (color: ColorResult) => {
    handleColorChange(color.hex);
    setColor(color.hex);
  };
  return <SketchPicker color={color} onChange={handleChange} />;
}

export default ColorPicker;
