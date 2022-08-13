
import * as React from "react";
import useTheme from '../ThemeContext/useTheme';
type ThemeProviderProps = { children: React.ReactNode , theme: Object | Function};

//TODO: Update the theme types when you have concrete idea of theme

function mergeThemes(customTheme:any,defaultTheme:any){
    if(typeof customTheme==='function'){
        const custom=customTheme();
        const mergedTheme={...defaultTheme,custom};
        if(process.env.NODE_ENV!=='production'){
            if(!mergedTheme){
                console.error([
                    'Butternut-UI: You should return an object from your theme function, i.e.',
                    '<ThemeProvider theme={()=>({})}/>',  
                ].join('\n'));
            }
        }

        return mergedTheme;
    }

    return {...defaultTheme,...customTheme};
   
}

