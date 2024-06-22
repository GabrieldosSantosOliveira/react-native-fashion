import React, { useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { Container } from "./../components/Container";
import { Box, Text } from "./../components/Theme";
import { Button } from "./../components/Button";
import { TextInput } from "../components/Form/TextInput";
import { CheckBox } from "../components/Form/CheckBox";
import { Footer } from "./components/Footer";
import { TextInput as RNTextInput } from "react-native";
import {
  AuthenticationRoutes,
  HomeRoutes,
  StackNavigationProps,
} from "../components/Navigation";
import { BorderlessButton } from "react-native-gesture-handler";
import { CompositeScreenProps } from "@react-navigation/native";
import { DrawerScreenProps } from "@react-navigation/drawer";

const LoginSchema = yup.object().shape({
  password: yup
    .string()
    .min(2, "Too short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
});

export const Login: React.FC<
  CompositeScreenProps<
    StackNavigationProps<AuthenticationRoutes, "Login">,
    DrawerScreenProps<HomeRoutes>
  >
> = ({ navigation }) => {
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
    onSubmit: () => navigation.navigate("OutfitIdeas"),
  });
  const password = useRef<RNTextInput>(null);
  return (
    <Container
      pattern={0}
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
            <BorderlessButton
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text variant="button" color="primary">
                Forgot Password
              </Text>
            </BorderlessButton>
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
