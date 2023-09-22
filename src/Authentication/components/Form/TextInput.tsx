import type { TextInputProps as RNTextInputProps } from "react-native";
import { TextInput as RNTextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";

import type { Theme } from "../../../components/Theme";
import { Box, theme } from "../../../components/Theme";

export interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon?: React.ComponentProps<typeof Feather>["name"];
  validator: (input: string) => boolean;
}
const Valid = true;
const Invalid = false;
const Pristine = null;
const SIZE = theme.borderRadii.m * 2;
function getColor(state: InputState): keyof Theme["colors"] {
  if (state === Pristine) {
    return "darkGrey";
  } else if (state === Valid) {
    return "primary";
  }
  return "danger";
}
export type InputState = typeof Valid | typeof Invalid | typeof Pristine;
export const TextInput: React.FC<TextInputProps> = ({
  icon,
  placeholder,
  validator,
  ...props
}) => {
  const [input, setInput] = useState("");
  const [state, setState] = useState<InputState>(Pristine);
  const reColor: keyof Theme["colors"] = getColor(state);
  const color = theme.colors[reColor];
  const validate = () => {
    const valid = validator(input);
    setState(valid);
  };
  return (
    <Box
      flexDirection="row"
      height={48}
      alignItems="center"
      borderRadius="s"
      borderWidth={StyleSheet.hairlineWidth}
      borderColor={reColor}
    >
      <Box padding="s">
        <Feather name={icon} size={16} color={color} />
      </Box>
      <Box flex={1}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor={color}
          onBlur={validate}
          onChangeText={setInput}
          {...props}
        />
      </Box>
      {(state === Valid || state === Invalid) && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          justifyContent="center"
          alignItems="center"
          backgroundColor={state === Valid ? "primary" : "danger"}
        >
          <Feather
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};
