import { argbFromHex,hexFromArgb,themeFromSourceColor } from "@material/material-color-utilities";

function generateColorTheme(color:string){
        const theme=themeFromSourceColor(argbFromHex(color));
        const colorTones:any={};
        const light:any={};
        const dark:any={};

        for(const [key,value] of Object.entries(theme.schemes.light.toJSON())){
            const color=hexFromArgb(value);
            light[key]=color;
        }
        for(const [key,value] of Object.entries(theme.schemes.dark.toJSON())){
            const color=hexFromArgb(value);
            dark[key]=color;
        }
        for(const [key,palette] of Object.entries(theme.palettes)){
            const tones:any={};
            for (const tone of [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]) {
                const color = hexFromArgb(palette.tone(tone));
                tones[tone] = color;
            }
            colorTones[key]=tones;
        }
        return {
            color:{
                light,
                dark,
                colorTones
            }
        }


}   

export default generateColorTheme;