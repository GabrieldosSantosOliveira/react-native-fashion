import React from "react";
import { Box, Text } from "./Theme";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export interface CloseButtonProps {
  onPress: () => void;
}
const SIZE = 60;
export const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => {
  return (
    <RectButton onPress={onPress}>
      <Box
        style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="secondary" textAlign="center">
          <Feather name="x" size={45} />
        </Text>
      </Box>
    </RectButton>
  );
};
