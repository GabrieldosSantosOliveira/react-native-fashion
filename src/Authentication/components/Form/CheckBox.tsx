import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../components/Theme";
export interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}
export const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  onChange,
  checked,
}) => {
  return (
    <RectButton onPress={onChange}>
      <Box flexDirection="row" alignItems="center">
        <Box
          marginRight="m"
          width={20}
          height={20}
          borderRadius="s"
          justifyContent="center"
          alignItems="center"
          borderColor="primary"
          borderWidth={1}
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};
