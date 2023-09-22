import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { theme } from "./src/components/Theme";
import { AuthenticationNavigator } from "./src/Authentication";

export default function App() {
  const [isFontsLoaded] = useFonts({
    "SFProDisplay-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SFProDisplay-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFProDisplay-SemiBold": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "SFProDisplay-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
  });
  if (!isFontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="small" />
      </View>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AuthenticationNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
