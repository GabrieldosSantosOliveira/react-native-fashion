import type { TextInputProps as RNTextInputProps } from "react-native";
import { TextInput as RNTextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import { useTheme } from "@shopify/restyle";

import type { Theme } from "../../../components/Theme";
import { Box } from "../../../components/Theme";

export interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon?: React.ComponentProps<typeof Feather>["name"];
  touched?: boolean;
  error?: string;
}
const getColor = (touched?: boolean, error?: string): keyof Theme["colors"] => {
  if (!touched) {
    return "text";
  } else if (touched && error) {
    return "danger";
  } else {
    return "primary";
  }
};
export const TextInputBase: React.ForwardRefRenderFunction<
  RNTextInput,
  TextInputProps
> = ({ icon, placeholder, touched, error, ...props }, ref) => {
  const theme = useTheme<Theme>();
  const SIZE = theme.borderRadii.m * 2.5;

  const reColor: keyof Theme["colors"] = getColor(touched, error);
  const color = theme.colors[reColor];

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
          ref={ref}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          placeholderTextColor={color}
          {...props}
        />
      </Box>
      {touched && (
        <Box
          borderRadius="m"
          height={SIZE}
          width={SIZE}
          justifyContent="center"
          alignItems="center"
          backgroundColor={error ? "danger" : "primary"}
          style={{ borderRadius: SIZE / 2 }}
        >
          <Feather
            name={error ? "x" : "check"}
            color="white"
            size={16}
            style={{ textAlign: "center" }}
          />
        </Box>
      )}
    </Box>
  );
};
export const TextInput = forwardRef(TextInputBase);
