import { createDrawerNavigator } from "@react-navigation/drawer";
import { OutfitIdeas } from "./OutfitIdeas/OutfitIdeas";
import { HomeRoutes } from "../components/Navigation";

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas} />
    </Drawer.Navigator>
  );
};
