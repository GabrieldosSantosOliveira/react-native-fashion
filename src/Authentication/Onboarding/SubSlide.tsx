import React from "react";
import { StyleSheet, View } from "react-native";

import { Button } from "../../components/Button";
import { Text } from "../../components/Theme";
export interface SubSlideProps {
  description: string;
  subTitle: string;
  last?: boolean;
  onPress: () => void;
}
export const SubSlide: React.FC<SubSlideProps> = ({
  subTitle,
  description,
  last = false,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subTitle} textAlign="center">
        {subTitle}
      </Text>
      <Text textAlign="center" variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        onPress={onPress}
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    flex: 1,
  },
  subTitle: {
    marginBottom: 12,
  },
  description: {
    marginBottom: 40,
  },
});
