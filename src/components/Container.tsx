import { Dimensions, Image, StatusBar, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, theme } from "./Theme";
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
export interface ContainerProps {
  children: React.ReactNode;
  footer: React.ReactNode;
}
export const assets = [require("./assets/patterns/1.png")];
export const Container: React.FC<ContainerProps> = ({ children, footer }) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1} backgroundColor="secondary">
      <StatusBar barStyle="light-content" />
      <Box backgroundColor="white">
        <Box
          borderBottomLeftRadius="xl"
          overflow="hidden"
          height={height * 0.61}
        >
          <Image
            source={assets[0]}
            style={{
              width,
              height,
              borderBottomLeftRadius: theme.borderRadii.xl,
            }}
          />
        </Box>
      </Box>
      <Box flex={1} overflow="hidden">
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width,
            height,
            borderBottomLeftRadius: theme.borderRadii.xl,
            top: -height * 0.61,
          }}
        />
        <Box
          borderRadius="xl"
          flex={1}
          backgroundColor="white"
          style={{ borderTopLeftRadius: 0 }}
        >
          {children}
        </Box>
      </Box>
      <Box backgroundColor="secondary" paddingTop="m">
        {footer}
        <Box height={insets.bottom} />
      </Box>
    </Box>
  );
};
