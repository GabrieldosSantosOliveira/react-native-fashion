import React from "react";
import { RoundedIcon, RoundedIconProps } from "./RoundedIcon";
import { RectButton } from "react-native-gesture-handler";
export interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: () => void;
}
export const RoundedIconButton: React.FC<RoundedIconButtonProps> = ({
  onPress,
  ...props
}) => {
  return (
    <RectButton onPress={onPress}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};
