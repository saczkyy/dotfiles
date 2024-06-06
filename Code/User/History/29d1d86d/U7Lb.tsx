import { StyleSheet } from "react-native";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

export const styles = StyleSheet.create({
  topBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 16,
    paddingTop: 44,
  },
  avatar: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 48,
  },
  usersName: {
    fontSize: 22,
    color: defaultTheme.colors.primary,
  },
  mainCard: {
    margin: 24,
    marginBottom: 0,
    backgroundColor: "#FFFEFF",
  },
  mainCardWrapper: {
    height: 108,
    display: "flex",
    gap: 4,
  },
  cardTitle: {
    fontSize: 22,
    color: defaultTheme.colors.primary,
  },
  cardSubTitle: {
    fontSize: 12,
    color: defaultTheme.colors.secondary,
  },
  formCardWrapper: {
    display: 'flex'
    gap: 8,
  },
  tabBar: {
    backgroundColor: "#FEF7FF",
  },
});
