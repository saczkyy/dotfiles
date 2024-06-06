import { MD3LightTheme as defaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export const InputActiveOutlineColor = "#79747E";

export const styles = StyleSheet.create({
  inputStyle: {
    width: 290,
    height: 40,
    backgroundColor: "transparent",
  },
  inputOutlineStyle: {
    borderRadius: 40,
    borderWidth: 1,
  },
  validationMsg: {
    fontSize: 12,
    height: 16,
    paddingHorizontal: 16,
    lineHeight: 16,
    marginVertical: 4,
    color: defaultTheme.colors.error,
  },
});
