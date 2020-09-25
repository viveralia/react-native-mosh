import { useFormikContext } from "formik";
import React, { FC } from "react";

import AppButton, { IAppButtonProps } from "../app-button";

const AppSubmitButton: FC<Omit<IAppButtonProps, "onPress">> = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit as any} />;
};

export default AppSubmitButton;
