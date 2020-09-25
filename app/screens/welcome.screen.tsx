import React, { FC } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import bgImg from "../assets/background.jpg";
import logoImg from "../assets/logo-red.png";
import AppButton from "../components/@common/app-button";

const WelcomeScreen: FC = () => {
  return (
    <ImageBackground blurRadius={6} source={bgImg} style={styles.background}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <SafeAreaView style={styles.header}>
          <Image source={logoImg} style={styles.logo} />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.buttonsContainer}>
          <AppButton
            title="Login"
            style={styles.loginButton}
            onPress={() => console.log("Login")}
          />
          <AppButton
            title="Signup"
            color="secondary"
            onPress={() => console.log("Signup")}
          />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  buttonsContainer: {
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    alignItems: "center",
  },
  loginButton: {
    marginBottom: 10,
  },
  logo: {
    height: 70,
    marginBottom: 12,
    width: 70,
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    textTransform: "capitalize",
  },
});

export default WelcomeScreen;
