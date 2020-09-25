import React, { FC } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import logo from "../assets/logo-red.png";
import AppScreen from "../components/@common/app-screen";
import {
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../components/@common/forms";

export interface ILoginForm {
  email: string;
  password: string;
}

const validationSchema = Yup.object<ILoginForm>({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen: FC = () => {
  return (
    <AppScreen style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log("values", values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          // Autofill (only works in iOS with keychain)
          textContentType="emailAddress"
          name="email"
          placeholder="Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          textContentType="password"
          name="password"
          secureTextEntry
        />
        <AppSubmitButton title="Login" />
      </AppForm>
    </AppScreen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    alignSelf: "center",
    height: 70,
    marginBottom: 20,
    marginTop: 50,
    width: 70,
  },
});
