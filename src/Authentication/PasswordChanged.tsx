import { Feather } from "@expo/vector-icons";
import { Container } from "../components/Container";
import { Routes, StackNavigationProps } from "../components/Navigation";
import { Box, Text } from "../components/Theme";
import { Button } from "../components/Button";
import { CloseButton } from "../components/CloseButton";
const SIZE = 80;
export const PasswordChanged: React.FC<
  StackNavigationProps<Routes, "PasswordChanged">
> = ({ navigation }) => {
  return (
    <Container
      pattern={0}
      footer={
        <Box flexDirection="row" justifyContent="center">
          <CloseButton onPress={() => navigation.pop()} />
        </Box>
      }
    >
      <Box flex={1} justifyContent="center" alignItems="center">
        <Box
          backgroundColor="primaryLight"
          justifyContent="center"
          alignItems="center"
          style={{ height: SIZE, width: SIZE, borderRadius: SIZE / 2 }}
          marginBottom="xl"
        >
          <Text color="primary" textAlign="center">
            <Feather name="check" size={32} />
          </Text>
        </Box>
        <Text variant="title1" textAlign="center" marginBottom="l">
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
