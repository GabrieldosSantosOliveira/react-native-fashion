import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { ThemeProvider } from "@shopify/restyle";

import { Onboarding } from "./src/Authentication/Onboarding";
import { Welcome } from "./src/Authentication/Welcome/Welcome";
import { theme } from "./src/components/Theme";
import React from "react";
const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  const [isFontsLoaded] = useFonts({
    "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
    "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
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
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
