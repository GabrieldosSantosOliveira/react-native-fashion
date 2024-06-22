import { SocialLogin } from "../components/SocialLogin";
import { Box, Text } from "../../components/Theme";
import { BorderlessButton } from "react-native-gesture-handler";
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
        <BorderlessButton onPress={onPress}>
          <Text variant="button" color="white">
            <Text>{`${title} `}</Text>
            <Text color="primary">{action}</Text>
          </Text>
        </BorderlessButton>
      </Box>
    </>
  );
};
