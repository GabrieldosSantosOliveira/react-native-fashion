import type { ViewStyle } from "react-native";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export interface SlideProps {
  title: string;
  right?: boolean;
}
const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
  container: {
    width,
  },
  title: {
    fontSize: 80,
    lineHeight: 80,
    color: "white",
    fontFamily: "SFProText-Bold",
    textAlign: "center",
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});
export const Slide: React.FC<SlideProps> = ({ title, right = false }) => {
  const transform: ViewStyle["transform"] = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text selectable style={styles.title}>
          {title}
        </Text>
      </View>
    </View>
  );
};
