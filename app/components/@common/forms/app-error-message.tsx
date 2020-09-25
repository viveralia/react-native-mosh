import { FormikErrors } from "formik";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import defaultSytles from "../../../config/styles";
import AppText from "../app-text";

interface IAppErrorMessageProps {
  error: FormikErrors<unknown> | string | undefined;
  visible: boolean | undefined;
}

const AppErrorMessage: FC<IAppErrorMessageProps> = ({ error, visible }) => {
  if (!visible || !error) return null;

  return <AppText style={styles.error}>{error}</AppText>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: defaultSytles.colors.danger,
  },
});
