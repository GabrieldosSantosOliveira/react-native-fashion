import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

import { SubSlide } from "./SubSlide";
import { Slide, SLIDE_HEIGHT } from "./Slide";
const { width } = Dimensions.get("window");

const slides = [
  {
    title: "Relaxed",
    subTitle: "Find Your Outfits",
    description:
      "Confused about your outfit? Don't worry! Find the best outfit here!",
    color: "#BFEAF5",
  },
  {
    title: "Playful",
    subTitle: "Hear it First, Wear it First",
    description:
      "Hating the clothes in your wardrobe? Explore hundreds of outfits ideas",
    color: "#BEECC4",
  },
  {
    title: "Excentric",
    subTitle: "Your Style, Your Way",
    description:
      "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
  },
  {
    title: "Funky",
    subTitle: "Look Good, Feel Good",
    description:
      "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
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
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, backgroundColor]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
        >
          {slides.map(({ title }, index) => {
            return <Slide key={index} right={!!(index % 2)} title={title} />;
          })}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[StyleSheet.absoluteFillObject, backgroundColor]}>
          <Animated.View
            style={[
              styles.footerContent,
              { width: width * slides.length },
              footerStyle,
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
        </Animated.View>
      </View>
    </View>
  );
};
const BORDER_RADIUS = 75;
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
    flexDirection: "row",
  },
});
