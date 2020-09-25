import { FormikValues, useFormikContext } from "formik";
import React, { FC } from "react";

import AppPicker, { IAppPickerProps } from "../app-picker";
import AppErrorMessage from "./app-error-message";

interface IAppFormPickerProps extends IAppPickerProps {
  name: string;
}

const AppFormPicker: FC<Omit<
  IAppFormPickerProps,
  "selectedItem" | "onSelectItem"
>> = ({ name, ...otherProps }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext<
    FormikValues
  >();

  return (
    <>
      <AppPicker
        onSelectItem={(selectedItem) => setFieldValue(name, selectedItem)}
        selectedItem={values[name]}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={!!touched[name]} />
    </>
  );
};

export default AppFormPicker;
