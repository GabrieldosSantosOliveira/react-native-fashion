import { TouchableWithoutFeedback } from "react-native";
import { SocialLogin } from "../components/SocialLogin";
import { Box, Text } from "../../components/Theme";
export interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}
export const Footer: React.FC<FooterProps> = ({ action, onPress, title }) => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <TouchableWithoutFeedback onPress={onPress}>
          <Text variant="button" color="white">
            <Text>{`${title} `}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </TouchableWithoutFeedback>
      </Box>
    </>
  );
};
