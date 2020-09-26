import { FormikValues, useFormikContext } from "formik";
import React, { FC } from "react";

import AppImageInputList from "../app-image-input-list";
import AppErrorMessage from "./app-error-message";

interface IAppFormImagePickerProps {
  name: string;
}

const AppFormImagePicker: FC<IAppFormImagePickerProps> = ({ name }) => {
  const { values, errors, touched, setFieldValue } = useFormikContext<
    FormikValues
  >();

  const imageUris = values[name];

  const handleAdd = (imageUri: string) => {
    setFieldValue(name, [...imageUris, imageUri]);
  };

  const handleRemove = (imageUri: string) => {
    setFieldValue(
      name,
      imageUris.filter((uri: string) => uri !== imageUri)
    );
  };

  return (
    <>
      <AppImageInputList
        imageUris={values[name]}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <AppErrorMessage error={errors[name]} visible={!!touched[name]} />
    </>
  );
};

export default AppFormImagePicker;
