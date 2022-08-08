import { argbFromHex, themeFromSourceColor} from "@material/material-color-utilities";

function generateCustomTheme(color:string){
  const theme = themeFromSourceColor(argbFromHex('#f82506'), [
    {
      name: "myTheme1",
      value: argbFromHex("#ff0000"),
      blend: true,
    },
  ]);
  return theme;
}


export {generateCustomTheme};