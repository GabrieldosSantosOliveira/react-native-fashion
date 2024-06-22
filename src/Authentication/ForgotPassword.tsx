import React from "react";
import { Container } from "../components/Container";
import { Footer } from "./components/Footer";
import { Box, Text } from "../components/Theme";
import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../components/Navigation";
import { Linking } from "react-native";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "../components/Button";
import { TextInput } from "../components/Form/TextInput";
const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Required"),
});

export const ForgotPassword: React.FC<
  StackNavigationProps<AuthenticationRoutes, "ForgotPassword">
> = ({ navigation }) => {
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: { email: "" },
      validationSchema: ForgotPasswordSchema,
      onSubmit: () => navigation.navigate("PasswordChanged"),
    },
  );
  return (
    <Container
      pattern={2}
      footer={
        <Footer
          title="Don't work?"
          action="Try another why"
          onPress={() => Linking.openURL("mailto:help@support.com")}
        />
      }
    >
      <Box padding="xl" justifyContent="center" flex={1}>
        <Text variant="title1" textAlign="center" marginBottom="l">
          Forgot Password
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and login again
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              icon="mail"
              placeholder="Enter your email"
              error={errors.email}
              touched={touched.email}
              autoComplete="email"
              autoCapitalize="none"
              returnKeyLabel="go"
              returnKeyType="go"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              label="Reset password"
              onPress={handleSubmit}
              variant="primary"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
