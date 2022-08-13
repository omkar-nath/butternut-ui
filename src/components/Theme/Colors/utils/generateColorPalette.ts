import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import {DEFAULT_PRIMARY_COLOR} from './constants';

function generateColorPalette(color: string) {
  color = color || DEFAULT_PRIMARY_COLOR;
  const theme = themeFromSourceColor(argbFromHex(color));
  const colorTones: Record<string,string> = {};
  const light: Record<string,string>= {};
  const dark: Record<string,string>= {};

  for (const [key, value] of Object.entries(theme.schemes.light.toJSON())) {
    const color = hexFromArgb(value);
    light[key] = color;
  }
  for (const [key, value] of Object.entries(theme.schemes.dark.toJSON())) {
    const color = hexFromArgb(value);
    dark[key] = color;
  }
  for (const [key, palette] of Object.entries(theme.palettes)) {
    const tones: any = {};
    for (const tone of [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]) {
      const color = hexFromArgb(palette.tone(tone));
      tones[tone] = color;
    }
    colorTones[key] = tones;
  }
  return {
    palette: {
      isDark:false,
      light,
      dark,
      colorTones,
    },
  };
}

function invertColor(hex: string) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  // invert color components
  var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
    g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
    b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str: any, len = 0) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

export { generateColorPalette, invertColor };
