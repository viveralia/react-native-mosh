import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

interface ITestExampleComponentProps {}

const TestExampleComponent: FC<ITestExampleComponentProps> = ({}) => {
  return <View style={styles.container} />;
};

export default TestExampleComponent;

const styles = StyleSheet.create({
  container: {},
});
