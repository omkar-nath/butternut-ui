import { generateColorPalette } from "./Colors/utils/generateColorPalette";
import generateTypography from "./Typography/utils/generateTypography";
import generateBreakPoints from "./MediaQueries/generateBreakpoints";

function generateTheme(options: any = {}) {
    const {
        primaryColor,
        typography: customTypography = {},
        breakpoints: customBreakpoints = {},
    } = options;
    const { palette } = generateColorPalette(primaryColor);
    const typography = generateTypography(customTypography);
    const breakpoints = generateBreakPoints(customBreakpoints);
    //TODO: Add code for other theme defaults

    const spacing = {};
    const zIndex = {};
    const components = {};

    return {
        palette,
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
