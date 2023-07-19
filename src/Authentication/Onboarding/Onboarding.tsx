import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import { Dot } from "./Dot";
import { SubSlide } from "./SubSlide";
import { Slide, SLIDE_HEIGHT, BORDER_RADIUS } from "./Slide";
import { Picture } from "./Picture";
const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subTitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("./assets/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    title: "Playful",
    subTitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
    color: "#BEECC4",
    picture: { src: require("./assets/2.png"), width: 2793, height: 3744 },
  },
  {
    title: "Excentric",
    subTitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: { src: require("./assets/3.png"), width: 2738, height: 3244 },
  },
  {
    title: "Funky",
    subTitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: { src: require("./assets/4.png"), width: 1757, height: 2551 },
  },
];
export const Onboarding = () => {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const x = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
    },
  });
  const backgroundColor = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      x.value,
      slides.map((_, index) => index * width),
      slides.map(({ color }) => color)
    ),
  }));
  const footerStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -x.value }],
  }));
  const currentIndex = useDerivedValue(() => x.value / width);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, backgroundColor]}>
        {slides.map(({ picture }, index) => (
          <Picture index={index} picture={picture} x={x} key={index} />
        ))}
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} right={!!(index % 2)} title={title} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFill, backgroundColor]} />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={currentIndex} index={index} />
            ))}
          </View>
          <Animated.View
            style={[
              footerStyle,
              { flex: 1, flexDirection: "row", width: width * slides.length },
            ]}
          >
            {slides.map(({ description, subTitle }, index) => (
              <SubSlide
                onPress={() => {
                  scrollRef.current?.scrollTo({
                    x: width * (index + 1),
                    animated: true,
                  });
                }}
                key={index}
                last={index === slides.length - 1}
                subTitle={subTitle}
                description={description}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
