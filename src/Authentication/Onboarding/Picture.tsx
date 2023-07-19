import type { ImageRequireSource } from "react-native";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

import { BORDER_RADIUS } from "./Slide";
export interface PictureProps {
  picture: {
    src: ImageRequireSource;
    width: number;
    height: number;
  };
  x: Animated.SharedValue<number>;
  index: number;
}
const { width } = Dimensions.get("window");
export const Picture: React.FC<PictureProps> = ({ picture, x, index }) => {
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        x.value,
        [(index - 0.5) * width, width * index, (index + 0.5) * width],
        [0, 1, 0],
        Extrapolate.CLAMP
      ),
    };
  });
  return (
    <Animated.View style={[styles.underlay, opacity]}>
      <Image
        source={picture.src}
        style={{
          width: width - BORDER_RADIUS,
          height: ((width - BORDER_RADIUS) * picture.height) / picture.width,
        }}
      />
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: BORDER_RADIUS,
    overflow: "hidden",
  },
});
