import { MD3LightTheme as defaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  baseCard: {
    margin: 24,
    marginTop: 32,
    backgroundColor: "#F7f2fa",
  },
  title: {
    fontSize: 22,
    color: defaultTheme.colors.primary,
  },
  subtitle: {
    fontSize: 12,
    color: defaultTheme.colors.secondary,
  },
});
