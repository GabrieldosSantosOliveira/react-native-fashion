/* eslint-disable max-len */
import React from "react";
import { Alert } from "react-native";

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
const emailValidator = (email: string) => {
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  return false;
};
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
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your email"
            validator={emailValidator}
          />
        </Box>
        <TextInput
          icon="lock"
          placeholder="Enter your password"
          validator={passwordValidator}
        />
        <Box flexDirection="row" justifyContent="space-between">
          <CheckBox label="Remember me" />
          <Button variant="transparent" onPress={() => {}}>
            <Text color="primary">Forgot Password</Text>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
