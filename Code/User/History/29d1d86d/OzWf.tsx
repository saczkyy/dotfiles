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
    padding: 24,
    paddingBottom: 0,
    backgroundColor: "#FFFEFF",
    height: 140,
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
  formCardsWrapper: {
    marginTop: 32,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginBottom: 32,
  },
  tabBar: {
    borderTopWidth: 1,
    borderTopColor: defaultTheme.colors.outline,
    backgroundColor: "#FEF7FF",
  },
});
