import { generateColorPalette } from "./Colors/utils/generateColorPalette";

function generateTheme(options: any = {}) {
  const colorPalette = generateColorPalette(options.primaryColor);
  //TODO: Add code for other theme defaults
  const typograpgy = {};
  const spacing = {};
  const breakpoints = {};
  const zIndex = {};
  const components = {};

  return {
    palette: colorPalette,
    typograpgy,
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
