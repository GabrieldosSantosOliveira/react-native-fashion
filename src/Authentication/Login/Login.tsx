import React from "react";
import { Alert } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import { Container } from "../../components/Container";
import { Box, Text } from "../../components/Theme";
import { SocialLogin } from "../components/SocialLogin";
import { Button } from "../../components/Button";
import { TextInput } from "../components/Form/TextInput";
import { CheckBox } from "../components/Form/CheckBox";
const Footer = () => {
  return (
    <>
      <SocialLogin />
      <Box alignItems="center">
        <Button
          variant="transparent"
          onPress={() => {
            Alert.alert("SIngUp");
          }}
        >
          <Box flexDirection="row" justifyContent="center">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sing Up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );
};
const LoginSchema = yup.object().shape({
  password: yup
    .string()
    .min(2, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
});

const passwordValidator = (password: string) => {
  return password.length >= 6;
};
export const Login = () => {
  return (
    <Container footer={<Footer />}>
      <Box padding="l">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text variant="body" textAlign="center">
          Use your credentials below and login to your account
        </Text>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{ email: "", password: "", remember: false }}
          onSubmit={(value) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <Box>
              <Box marginBottom="m">
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  icon="mail"
                  placeholder="Enter your email"
                />
              </Box>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                icon="lock"
                placeholder="Enter your password"
              />
              <Box flexDirection="row" justifyContent="space-between">
                <CheckBox
                  label="Remember me"
                  checked={values.remember}
                  onChange={() => setFieldValue("remember", !values.remember)}
                />
                <Button variant="transparent" onPress={() => {}}>
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
          )}
        </Formik>
      </Box>
    </Container>
  );
};
