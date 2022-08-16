import { DEFAULT_FONT_FAMILY } from "./constants";

function createVariants(fontFamily, weight,size,lineHeight,letterSpacing,casing=null){
    return {
        fontFamily:DEFAULT_FONT_FAMILY,
        fontWeight:weight,
        lineHeight,
        ...(fontFamily === DEFAULT_FONT_FAMILY
            ? { letterSpacing: `${Math.floor(letterSpacing / size)}em` }
            : {}),
        ...casing
    }
}


export default createVariants;