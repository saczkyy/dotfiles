import { StyleSheet } from "react-native";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

export const styles = StyleSheet.create({
  mainView: {
    padding: 24,
    width: "auto",
    maxWidth: "100%",
    margin: "auto",
    paddingTop: 96,
    overflow: "hidden",
  },
  inputsView: {
    padding: 8,
    paddingTop: 44,
    display: "flex",
  },
  buttonsView: {
    paddingHorizontal: 32,
    marginVertical: 24,
  },
  defaultButton: {
    height: 32,
    marginHorizontal: 26,
    maxWidth: 230,
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
  },
  orText: {
    textAlign: "center",
    fontSize: 12,
    padding: 30,
  },
  termsOfUse: {
    paddingTop: 18,
    textAlign: "justify",
    fontSize: 10,
  },
  linkBlueColor: {
    color: "#497cfe",
  },
  buttonLabelStyle: {
    height: "100%",
    textAlignVertical: "center",
  },
  title: {
    color: defaultTheme.colors.primary,
    fontWeight: "700",
    fontSize: 30,
  },
});
