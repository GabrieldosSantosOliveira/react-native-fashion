import {
  createBox,
  createText,
  createTheme,
  useTheme as useReTheme,
} from "@shopify/restyle";
import type { ImageStyle, TextStyle, ViewStyle } from "react-native";

export const palette = {
  primary: "#2CB9B0",
  title: "#0C0D34",
  body: "rgba(12, 13, 52, 0.7)",
  white: "#FFF",
  grey: "rgba(12,13,52,0.05)",
};

export const theme = createTheme({
  colors: {
    primary: palette.primary,
    secondary: palette.title,
    text: palette.body,
    white: palette.white,
    grey: palette.grey,
    darkGrey: "#8a8d90",
    danger: "#FF0058",
    primaryLight: "#E7F9F7",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      fontFamily: "SFProDisplay-Bold",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-SemiBold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-SemiBold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Medium",
      color: "text",
    },
    defaults: {},
  },
});
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export type Theme = typeof theme;
export type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const themeCurrent = useReTheme<Theme>();
    return styles(themeCurrent);
  };
export const useTheme = () => useReTheme<Theme>();
