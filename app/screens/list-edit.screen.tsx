import React, { FC } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import AppCategoryPickerItem from "../components/@common/app-category-picker-item";
import AppScreen from "../components/@common/app-screen";
import {
  AppForm,
  AppFormField,
  AppFormImagePicker,
  AppFormPicker,
  AppSubmitButton,
} from "../components/@common/forms";
import useLocation from "../hooks/use-location";

export interface ICategory {
  label: string;
  value: string;
}

export interface IListingEditForm {
  category: ICategory;
  description?: string;
  price: number;
  title: string;
  images: string[] | any;
}

const categories = [
  { backgroundColor: "red", icon: "apps", label: "Furniture", value: 1 },
  { backgroundColor: "green", icon: "email", label: "Clothing", value: 2 },
  { backgroundColor: "blue", icon: "lock", label: "Camera", value: 3 },
];

const validationSchema = Yup.object().shape<IListingEditForm>({
  category: Yup.object()
    .shape<ICategory>({
      label: Yup.string().required(),
      value: Yup.string().required(),
    })
    .nullable()
    .required()
    .label("Category"),
  description: Yup.string().notRequired().label("Description"),
  images: Yup.array()
    .of(Yup.string())
    .min(1, "Please select at least one image"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  title: Yup.string().required().min(1).label("Title"),
});

const ListEditScreen: FC = () => {
  const location = useLocation();

  return (
    <AppScreen style={styles.container}>
      <AppForm
        initialValues={{
          category: "",
          description: "",
          images: [],
          price: "",
          title: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("values", values)}
      >
        <AppFormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          maxLength={8}
          name="price"
          placeholder="Price"
          keyboardType="numeric"
          width={120}
        />
        <AppFormPicker
          name="category"
          placeholder="Category"
          items={categories}
          width="50%"
          PickerItemComponent={AppCategoryPickerItem}
          numberOfColumns={3}
        />
        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />
        <AppSubmitButton title="Post" />
      </AppForm>
    </AppScreen>
  );
};

export default ListEditScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
