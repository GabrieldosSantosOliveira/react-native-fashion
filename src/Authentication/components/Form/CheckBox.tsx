import React, { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import { Box, Text } from "../../../components/Theme";
export interface CheckBoxProps {
  label: string;
}
export const CheckBox: React.FC<CheckBoxProps> = ({ label }) => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <RectButton onPress={() => setChecked((prev) => !prev)}>
      <Box flexDirection="row">
        <Box borderRadius="s" backgroundColor={checked ? "primary" : "white"}>
          <Icon name="check" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};
