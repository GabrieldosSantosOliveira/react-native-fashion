import { useTheme } from "@shopify/restyle";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Text, type Theme } from "./Theme";
export interface ButtonProps {
  variant?: "primary" | "default";
  label: string;
  onPress: () => void;
}
export const Button: React.FC<ButtonProps> = ({
  variant = "default",
  label,
  onPress,
}) => {
  const { colors } = useTheme<Theme>();
  const backgroundColor = variant === "primary" ? colors.primary : colors.grey;
  const color = variant === "primary" ? colors.white : colors.title;
  return (
    <RectButton
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <Text variant="button" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});
