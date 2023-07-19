import type { SharedValue } from "react-native-reanimated";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
export interface DotProps {
  index: number;
  currentIndex: SharedValue<number>;
}
export const Dot: React.FC<DotProps> = ({ index, currentIndex }) => {
  const style = useAnimatedStyle(() => {
    const scale = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP
    );
    const opacity = interpolate(
      currentIndex.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );
    return {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#2CB9B0",
      margin: 8,
      opacity,
      transform: [
        {
          scale,
        },
      ],
    };
  });
  return <Animated.View style={style} />;
};
