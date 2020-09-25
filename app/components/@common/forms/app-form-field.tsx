import { FormikValues, useFormikContext } from "formik";
import React, { FC } from "react";

import AppTextInput, { IAppTextInputProps } from "../app-text-input";
import AppErrorMessage from "./app-error-message";

interface IAppFormFieldProps extends IAppTextInputProps {
  name: string;
}

const AppFormField: FC<IAppFormFieldProps> = ({ name, ...otherProps }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext<
    FormikValues
  >();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={!!touched[name]} />
    </>
  );
};

export default AppFormField;
