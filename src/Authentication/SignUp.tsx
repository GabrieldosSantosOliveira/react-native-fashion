import React, { useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { Container } from "./../components/Container";
import { Box, Text } from "./../components/Theme";
import { Button } from "./../components/Button";
import { TextInput } from "./components/Form/TextInput";
import { Footer } from "./components/Footer";
import { TextInput as RNTextInput } from "react-native";
import { Routes, StackNavigationProps } from "../components/Navigation";

const SignUpSchema = yup.object().shape({
  password: yup
    .string()
    .min(2, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
  passwordConfirmation: yup
    .string()
    .required()
    .equals([yup.ref("password")], "Passwords don't match"),
});

export const SignUp: React.FC<StackNavigationProps<Routes, "SignUp">> = ({
  navigation,
}) => {
  const passwordConfirmationRef = useRef<RNTextInput>(null);
  const password = useRef<RNTextInput>(null);
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      initialValues: {
        email: "",
        password: "",
        passwordConfirmation: "",
        remember: false,
      },
      validationSchema: SignUpSchema,
      onSubmit: (value) => {
        console.log(value);
      },
    },
  );
  return (
    <Container
      pattern={1}
      footer={
        <Footer
          title="Already have an account?"
          action="Login here"
          onPress={() => navigation.navigate("Login")}
        />
      }
    >
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Create your account
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          {"Let'us know what your name, email, and your password"}
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
              returnKeyLabel="next"
              returnKeyType="next"
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={password}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              icon="lock"
              placeholder="Enter your password"
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoComplete="password"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => passwordConfirmationRef.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={passwordConfirmationRef}
              onChangeText={handleChange("passwordConfirmation")}
              onBlur={handleBlur("passwordConfirmation")}
              icon="lock"
              placeholder="Confirm your password"
              error={errors.passwordConfirmation}
              touched={touched.password}
              secureTextEntry
              autoComplete="password"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              label="Create your account"
              onPress={handleSubmit}
              variant="primary"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
