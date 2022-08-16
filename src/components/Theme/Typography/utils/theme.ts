import { generateColorPalette } from "../../Colors/utils/generateColorPalette";
import  generateTypography  from "../../Typography/utils/generateTypography";


function generateTheme(options: any = {}) {

  const {primaryColor,typography:customTypography={}}=options;


  const colorPalette = generateColorPalette(primaryColor);
  const typography = generateTypography(customTypography);
  //TODO: Add code for other theme defaults

  const spacing = {};
  const breakpoints = {};
  const zIndex = {};
  const components = {};

  return {
    palette: colorPalette,
    typography,
    spacing,
    breakpoints,
    zIndex,
    components,
  };
}
//TODO: Change all any to strict types

function mergeThemes(customTheme: any, defaultTheme: any) {
  if (typeof customTheme === "function") {
    const mergedTheme = customTheme(defaultTheme);

    if (process.env.NODE_ENV !== "production") {
      if (!mergedTheme) {
        console.error(
          [
            "Butternut-UI: You should return an object from your theme function, i.e.",
            "<ThemeProvider theme={()=>({})}/>",
          ].join("\n")
        );
      }
    }

    return mergedTheme;
  }

  return { ...defaultTheme, ...customTheme };
}
export { generateTheme, mergeThemes };
