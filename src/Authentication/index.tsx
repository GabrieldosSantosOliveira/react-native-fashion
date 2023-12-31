import { createStackNavigator } from "@react-navigation/stack";

import type { Routes } from "../components/Navigation";

import { Onboarding } from "./Onboarding";
import { Welcome } from "./Welcome/Welcome";
import { Login } from "./Login/Login";

const AuthenticationStack = createStackNavigator<Routes>();
export const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
      <AuthenticationStack.Screen name="Login" component={Login} />
    </AuthenticationStack.Navigator>
  );
};
