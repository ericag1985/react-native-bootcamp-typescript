import { colors, Colors } from "./colors";
import { sizes, spacing, lineHeights } from "./sizes";
import {
  fonts,
  Fonts,
  fontWeights,
  FontWeights,
  fontSizes,
  FontSizes,
} from "./fonts";
import { DefaultTheme } from "styled-components/native";

const theme: DefaultTheme = {
  colors,
  fonts,
  spacing,
  lineHeights,
  sizes,
  fontSizes,
  fontWeights,
};

export { theme, Colors, Fonts, FontWeights, FontSizes };
