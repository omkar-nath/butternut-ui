import React, { useState, useEffect } from "react";
import Colorbox from "./Colorbox";
import ColorPicker from "./ColorPicker";
import generateColorTheme from "./utils/generateColorTheme";
import styled, { css } from "styled-components";

const FlexContainer = styled("div")`
  display: flex;
  gap: 10px;
`;
const Theme = () => {
  const [color, setColor] = useState("#0B57D0");
  const [colorTheme, setColorTheme] = useState({
    color: {
      light: {},
      dark: {},
      colorTones: {
        primary: {},
        secondary: {},
        tertiary: {},
        neutral: {},
        error: {},
        neutralVariant: {},
      },
    },
  });

  const handleChange = (color: any) => {
    setColor(color);
  };

  useEffect(() => {
    const theme = generateColorTheme(color);
    setColorTheme(theme);
  }, [color]);

  return (
    <>
      <h1>Generate theme colors</h1>
      <ColorPicker handleColorChange={handleChange} />
      <h1>Colors</h1>
      <h2> Light Theme</h2>
      <FlexContainer>
        {Object.entries(colorTheme["color"]["light"]).map(([key, value]) => {
          return <Colorbox backgroundColor={value} />;
        })}
      </FlexContainer>
      <h2>Dark Theme</h2>
      <FlexContainer>
        {Object.entries(colorTheme["color"]["dark"]).map(([key, value]) => {
          return <Colorbox backgroundColor={value} />;
        })}
      </FlexContainer>
      <h1>Color Tones</h1>
      <div>
      <h3>Primary</h3>
        <FlexContainer>
   
          {Object.entries(colorTheme["color"]["colorTones"]["primary"]).map(
            ([key, value]) => {
              return <Colorbox backgroundColor={value} />;
            }
          )}
        </FlexContainer>
        <h3>Secondary</h3>
        <FlexContainer>
       
          {Object.entries(colorTheme["color"]["colorTones"]["secondary"]).map(
            ([key, value]) => {
              return <Colorbox backgroundColor={value} />;
            }
          )}
        </FlexContainer>
        <h3>Tertiary</h3>
        <FlexContainer>
       
          {Object.entries(colorTheme["color"]["colorTones"]["tertiary"]).map(
            ([key, value]) => {
              return <Colorbox backgroundColor={value} />;
            }
          )}
        </FlexContainer>
        <h3>Neutral</h3>
        <FlexContainer>
       
          {Object.entries(colorTheme["color"]["colorTones"]["neutral"]).map(
            ([key, value]) => {
              return <Colorbox backgroundColor={value} />;
            }
          )}
        </FlexContainer>
        <h3>Neutral Variant</h3>
        <FlexContainer>
       
          {Object.entries(colorTheme["color"]["colorTones"]["neutralVariant"]).map(
            ([key, value]) => {
              return <Colorbox backgroundColor={value} />;
            }
          )}
        </FlexContainer>
        <h3>Error</h3>
        <FlexContainer>
       
          {Object.entries(colorTheme["color"]["colorTones"]["error"]).map(
            ([key, value]) => {
              return <Colorbox backgroundColor={value} />;
            }
          )}
        </FlexContainer>
      </div>
    </>
  );
};

export default Theme;
