import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar } from "react-native";
import RestaurantScreen from "@/features/restaurants/screens/restaurant.screen";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "@/infrastructure";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export default function Index() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <RestaurantScreen />
      </Container>
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
