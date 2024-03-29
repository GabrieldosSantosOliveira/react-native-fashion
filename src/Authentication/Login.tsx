import React, { useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { Container } from "./../components/Container";
import { Box, Text } from "./../components/Theme";
import { Button } from "./../components/Button";
import { TextInput } from "./components/Form/TextInput";
import { CheckBox } from "./components/Form/CheckBox";
import { Footer } from "./components/Footer";
import { TextInput as RNTextInput } from "react-native";
import { Routes, StackNavigationProps } from "../components/Navigation";

const LoginSchema = yup.object().shape({
  password: yup
    .string()
    .min(2, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
});

export const Login: React.FC<StackNavigationProps<Routes, "Login">> = ({
  navigation,
}) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
    errors,
    touched,
  } = useFormik({
    initialValues: { email: "", password: "", remember: false },
    validationSchema: LoginSchema,
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const password = useRef<RNTextInput>(null);
  return (
    <Container
      footer={
        <Footer
          title="Don't have an account?"
          action="Sing Up here"
          onPress={() => navigation.navigate("SignUp")}
        />
      }
    >
      <Box padding="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Use your credentials below and login to your account
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
            onSubmitEditing={() => handleSubmit()}
          />
          <Box
            flexDirection="row"
            marginVertical="s"
            justifyContent="space-between"
          >
            <CheckBox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <Button
              variant="transparent"
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text color="primary">Forgot Password</Text>
            </Button>
          </Box>
          <Box alignItems="center" marginTop="m">
            <Button
              label="Log into your account"
              onPress={handleSubmit}
              variant="primary"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
