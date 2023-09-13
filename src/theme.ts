import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

export const themeConfig: ThemeConfig = { //the config var is of type ThemeConfig to access the initialColoMode prop below
  initialColorMode: "dark", //system sets the initial color mode //or "dark" or "light"
  useSystemColorMode: true //changes in sys color mode also affect in app
}

const theme = extendTheme({
  themeConfig,
  colors: {
    gray: { //to modify the color shades of gray eg the gray200, gray600 etc
      50: "#e5fff1",
      100: "#e5fff1",
      200: "#c9f0d8",
      300: "#c9f0d8",//light colors upto here
      400: "#095624",//medium
      500: "#012b10",//medium-dark
      600: "#01200f",
      700: "#01200f",
      800: "#001f04",
      900: "#001f04", //dark colors upto here
    }
  }
});
export default theme;