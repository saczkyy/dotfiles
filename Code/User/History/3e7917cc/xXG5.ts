import { MD3LightTheme as defaultTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  baseCard: {
    margin: 24,
    marginTop: 32,
    backgroundColor: "#F7f2fa",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  cardText: {
    flex: 1,
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#a4da4d",
    // alignItems: "center",
  },
  title: {
    fontSize: 22,
    lineHeight: 22,
    color: defaultTheme.colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 12,
    color: defaultTheme.colors.secondary,
  },
  button: {
    height: 32,
    display: "flex",
    justifyContent: "center",
  },
  buttonLabelStyle: {
    height: "100%",
    textAlignVertical: "center",
  },
});
