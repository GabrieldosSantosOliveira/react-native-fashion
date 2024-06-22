import React from "react";
import { Feather } from "@expo/vector-icons";
import { Box, Text, Theme } from "./Theme";
export interface RoundedIconProps {
  name: keyof typeof Feather.glyphMap;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}
export const RoundedIcon: React.FC<RoundedIconProps> = ({
  backgroundColor,
  color,
  name,
  size,
}) => {
  const iconSize = size * 0.8;
  return (
    <Box
      borderRadius="m"
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      backgroundColor={backgroundColor}
    >
      <Text style={{ width: iconSize, height: iconSize }} color={color}>
        <Feather name={name} size={iconSize} />
      </Text>
    </Box>
  );
};
