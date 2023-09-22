import { Dimensions, Image } from "react-native";

import { Box, Text, theme } from "../../components/Theme";
import { Button } from "../../components/Button";
import type { Routes, StackNavigationProps } from "../../components/Navigation";
const { width } = Dimensions.get("window");
const picture = {
  src: require("./../assets/5.png"),
  width: 3383,
  height: 5074,
};
export const Welcome = ({
  navigation,
}: StackNavigationProps<Routes, "Welcome">) => {
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        />
        <Box
          backgroundColor="white"
          borderTopLeftRadius="xl"
          flex={1}
          justifyContent="space-evenly"
          alignItems="center"
          padding="xl"
        >
          <Text variant="title2">Let's get started</Text>
          <Text variant="body" textAlign="center">
            Login to your account below or singup for an amazing experience
          </Text>
          <Button
            variant="primary"
            label="Have an account? Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button variant="default" label="Join us, it's free" />
          <Button variant="transparent" label="Forgot password?" />
        </Box>
      </Box>
    </Box>
  );
};
