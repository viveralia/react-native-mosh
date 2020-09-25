import { Formik, FormikConfig, FormikValues } from "formik";
import React, { FC } from "react";

const AppForm: FC<FormikConfig<FormikValues>> = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  ...otherProps
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      {...otherProps}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
