import { createText, createTheme, BaseTheme } from "@shopify/restyle";

export const palette = {
  primary: "#2CB9B0",
  title: "#0C0D34",
  body: "rgba(12, 13, 52, 0.7)",
  white: "#FFF",
};

export const theme = createTheme({
  colors: {
    primary: palette.primary,
    title: palette.title,
    text: palette.body,
    white: palette.white,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: "white",
      fontFamily: "SFProText-Bold",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-SemiBold",
      color: "title",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-SemiBold",
      color: "title",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
    },
    defaults: {},
  },
});
export const Text = createText<Theme>();
export type Theme = typeof theme;
