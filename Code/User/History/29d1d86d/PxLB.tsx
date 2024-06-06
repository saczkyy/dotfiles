import { StyleSheet } from "react-native";
import { MD3LightTheme as defaultTheme } from "react-native-paper";
import { useTheme } from "react-native-paper";

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
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
      backgroundColor: "#FCFCFD",
      height: 140,
    },
    mainCardWrapper: {
      height: 108,
      display: "flex",
      paddingVertical: 14,
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
};
