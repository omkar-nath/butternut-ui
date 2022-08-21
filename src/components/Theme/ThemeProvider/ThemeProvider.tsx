import * as React from "react";
import useTheme from "../ThemeContext/useTheme";
import ThemeContext  from "../ThemeContext/ThemeContext";
import { mergeThemes } from "../theme";
type ThemeProviderProps = {
  children: React.ReactNode;
  theme: Object | Function;
};

//TODO: Update the theme types when you have concrete idea of theme

function ThemeProvider(props: ThemeProviderProps) {
  const { children, theme } = props;
  const existingTheme = useTheme();

  if (process.env.NODE_ENV !== "production") {
    if (existingTheme === null && typeof theme === "function") {
      console.error(
        [
          "Butternut-UI: Theme is not present in higher react tree",
          "Please provide a theme object",
        ].join("\n")
      );
    }
  }

  const themeObj=React.useMemo(()=>{
    const finalTheme=!existingTheme ? theme:mergeThemes(existingTheme,theme);

    return finalTheme;
  },[theme,existingTheme]);

  return <ThemeContext.Provider value={themeObj}>{children}</ThemeContext.Provider>;

}

export default ThemeProvider;