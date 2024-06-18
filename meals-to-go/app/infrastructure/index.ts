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
import { DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fonts: {
    ...DefaultTheme.fonts,
    ...fonts,
  },
  spacing,
  lineHeights,
  sizes,
  fontSizes,
  fontWeights,
};

export { theme, Colors, Fonts, FontWeights, FontSizes };
