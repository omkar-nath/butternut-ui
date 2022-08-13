import { generateColorPalette } from "./Colors/utils/generateColorPalette";

function generateTheme(options:any={}){

    const colorPalette=generateColorPalette(options.primaryColor);
//TODO: Add code for other theme defaults
    const typograpgy={};
    const spacing={};
    const breakpoints={};
    const zIndex={};
    const components={};

    return {
        palette:colorPalette,
        typograpgy,
        spacing,
        breakpoints,
        zIndex,
        components
    }

}

export default generateTheme;