import type { ImageRequireSource } from "react-native";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTheme } from "@shopify/restyle";

import type { Theme } from "../../components/Theme";
import { makeStyles } from "../../components/Theme";

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
  const styles = useStyles();
  const theme = useTheme<Theme>();
  const opacity = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        x.value,
        [(index - 0.5) * width, width * index, (index + 0.5) * width],
        [0, 1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <Animated.View style={[styles.underlay, opacity]}>
      <Image
        source={picture.src}
        style={{
          width: width - theme.borderRadii.xl,
          height:
            ((width - theme.borderRadii.xl) * picture.height) / picture.width,
        }}
      />
    </Animated.View>
  );
};
const useStyles = makeStyles((theme) => ({
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden",
  },
}));
