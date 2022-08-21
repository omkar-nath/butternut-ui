import isProduction from "../../../../utils/checkDevelopmentEnv";
import createVariants from "./createTypographyVariants";
import { DEFAULT_FONT_FAMILY } from "./constants";
import pixelToRemConvertor from "./pixelToRem";


function createTypography(typography) {
  const {
    fontFamily = DEFAULT_FONT_FAMILY,
    fontSize = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    htmlFontSize = 16,
  } = typeof typography === "function" ? typography() : typography;

  if(!isProduction()){
    if(typeof fontSize!=='number'){
        console.error('Butternut-ui: `fontSize` should be a number');
    }

    if(typeof htmlFontSize!=='number'){
        console.error('Butternut-ui: `htmlFontSize` should be a number');
    }
  }

  const pixelToRem= ((size)=>pixelToRemConvertor(size,htmlFontSize,fontSize/14));

  const variants={
    h1: createVariants(fontFamily,fontWeightLight, 96, 1.167, -1.5),
    h2: createVariants(fontFamily,fontWeightLight, 60, 1.2, -0.5),
    h3: createVariants(fontFamily,fontWeightRegular, 48, 1.167, 0),
    h4: createVariants(fontFamily,fontWeightRegular, 34, 1.235, 0.25),
    h5: createVariants(fontFamily,fontWeightRegular, 24, 1.334, 0),
    h6: createVariants(fontFamily,fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: createVariants(fontFamily,fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: createVariants(fontFamily,fontWeightMedium, 14, 1.57, 0.1),
    body1: createVariants(fontFamily,fontWeightRegular, 16, 1.5, 0.15),
    body2: createVariants(fontFamily,fontWeightRegular, 14, 1.43, 0.15),
    button: createVariants(fontFamily,fontWeightMedium, 14, 1.75, 0.4, {textTransform:'uppercase'}),
    caption: createVariants(fontFamily,fontWeightRegular, 12, 1.66, 0.4),
    overline: createVariants(fontFamily,fontWeightRegular, 12, 2.66, 1, {textTransform:'uppercase'}),
  }

  return {
    htmlFontSize,
    pixelToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    ...variants 
  }
}

export default createTypography;

