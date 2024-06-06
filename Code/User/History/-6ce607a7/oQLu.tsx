import React from "react";
import { StatusBar } from "expo-status-bar";
import { Linking, ScrollView, View } from "react-native";
import {
  MD3LightTheme as defaultTheme,
  Button,
  PaperProvider,
  Title,
  Text,
} from "react-native-paper";

import { styles } from "styles/styles";
import { FormInput } from "components/FormInput";

export const RegistrationPage = () => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rePassword, setRePassword] = React.useState("");

  const [nameValidationMsg, setNameValidationMsg] = React.useState("");
  const [surnameValidationMsg, setSurnameValidationMsg] = React.useState("");
  const [emailValidationMsg, setEmailValidationMsg] = React.useState("");
  const [passwordValidationMsg, setPasswordValidationMsg] = React.useState("");
  const [rePasswordValidationMsg, setRePasswordValidationMsg] =
    React.useState("");

  const handleSubmit = () => {
    if (name.length == 0) {
      setNameValidationMsg("Name is required");
    } else {
      setNameValidationMsg("");
    }

    if (surname.length == 0) {
      setSurnameValidationMsg("Surname is required");
    } else {
      setSurnameValidationMsg("");
    }

    if (email.length == 0) {
      setEmailValidationMsg("E-mail is required");
    } else {
      setEmailValidationMsg("");
    }

    if (password.length < 8) {
      setPasswordValidationMsg("Password must be at least 8 characters long");
    } else {
      setPasswordValidationMsg("");
    }

    if (rePassword != password) {
      setRePasswordValidationMsg("Passwords are different");
    } else if (rePassword.length == 0) {
      setRePasswordValidationMsg("Repeated password is required");
    } else {
      setRePasswordValidationMsg("");
    }
  };

  return (
    <PaperProvider>
      <StatusBar style="auto" />

      <ScrollView style={styles.mainView}>
        <Title
          style={{
            color: defaultTheme.colors.primary,
            fontWeight: "700",
            fontSize: 30,
          }}
        >
          Sign Up
        </Title>

        <View style={styles.inputsView}>
          <RegistrationTextInput
            label="Name"
            value={name}
            onChangeText={setName}
            errorMessage={nameValidationMsg}
          />
          <RegistrationTextInput
            label="Surname"
            value={surname}
            onChangeText={setSurname}
            errorMessage={surnameValidationMsg}
          />
          <RegistrationTextInput
            label="E-mail"
            value={email}
            onChangeText={setEmail}
            errorMessage={emailValidationMsg}
          />
          <RegistrationTextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            errorMessage={passwordValidationMsg}
            secureTextEntry={true}
          />
          <RegistrationTextInput
            label="Confirm password"
            value={rePassword}
            onChangeText={setRePassword}
            errorMessage={rePasswordValidationMsg}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.buttonsView}>
          <Button
            mode="contained"
            labelStyle={{ marginVertical: 5 }}
            style={styles.defaultButton}
            onPress={handleSubmit}
          >
            Sign up
          </Button>
          <Text style={styles.orText}>OR</Text>
          <Button
            mode="outlined"
            labelStyle={{ marginVertical: 5 }}
            style={styles.defaultButton}
            onPress={() => console.log("Pressed")}
          >
            Log in
          </Button>
          <Text style={styles.termsOfUse}>
            By creating an account you agree with our
            <Text
              style={{ color: "#497cfe" }}
              onPress={() => Linking.openURL("https://google.com")}
            >
              Terms of Use
            </Text>
          </Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
};
