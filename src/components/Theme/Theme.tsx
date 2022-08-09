import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

const Theme = () => {


  return (
    <>
    <h1>Choose a color to generate theme based on Google Material Design 3 guidelines </h1>
     <ColorPicker />
     <h1>Colors</h1>
        <h2> Light Theme</h2>
        <h2>Dark Theme</h2>
     <h1>Color Tones</h1>
    </>
  );
};

export default Theme;
