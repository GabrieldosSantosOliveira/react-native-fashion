import { Container } from "../components/Container";
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../components/Navigation";
import { Box, Text } from "../components/Theme";
import { Button } from "../components/Button";
import { RoundedIconButton } from "../components/RoundedIconButton";
import { RoundedIcon } from "../components/RoundedIcon";
const SIZE = 80;
export const PasswordChanged: React.FC<
  StackNavigationProps<AuthenticationRoutes, "PasswordChanged">
> = ({ navigation }) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <RoundedIconButton
            name="x"
            size={60}
            backgroundColor="white"
            color="secondary"
            onPress={() => navigation.pop()}
          />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center" padding="xl">
        <RoundedIcon
          name="check"
          size={SIZE}
          backgroundColor="primaryLight"
          color="primary"
        />
        <Text variant="title1" textAlign="center" marginVertical="l">
          Forgot Password
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Enter the email address associated with your account
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            label="Reset password"
            onPress={() => navigation.navigate("Login")}
            variant="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};
