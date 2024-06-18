import { Colors, Fonts, FontWeights, FontSizes } from "@/infrastructure";
import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    colors: Colors;
    fonts: Fonts;
    fontWeights: FontWeights;
    fontSizes: FontSizes;
    sizes: string[];
    lineHeights: Record<string, string>;
    spacing: string[];
  }
}
