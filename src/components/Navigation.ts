/* eslint-disable @typescript-eslint/consistent-type-definitions */
import type {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string,
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}
export type AppRoutes = {
  Authentication: NavigatorScreenParams<AuthenticationRoutes>;
  Home: NavigatorScreenParams<HomeRoutes>;
};
export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
};

export type HomeRoutes = {
  OutfitIdeas: undefined;
};
