import React, { FC } from "react";
import * as Yup from "yup";

import AppScreen from "../components/@common/app-screen";
import {
  AppForm,
  AppFormField,
  AppSubmitButton,
} from "../components/@common/forms";

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
}

const validationSchema = Yup.object<IRegisterForm>({
  email: Yup.string().required().email().label("Email"),
  name: Yup.string().required().label("Name"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen: FC = () => {
  return (
    <AppScreen>
      <AppForm
        initialValues={{ email: "", name: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("values", values)}
      >
        <AppFormField
          name="name"
          placeholder="Name"
          icon="face-profile"
          autoCapitalize="words"
        />
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
        <AppSubmitButton title="Register" />
      </AppForm>
    </AppScreen>
  );
};

export default RegisterScreen;
