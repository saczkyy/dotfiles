import { COLORS } from "constants/colors";
import { StyleSheet } from "react-native";
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
      borderColor: COLORS.black,
      borderWidth: 1,
      borderRadius: 48,
    },
    usersName: {
      fontSize: 22,
      color: theme.colors.primary,
    },
    mainCard: {
      margin: 24,
      marginBottom: 0,
      backgroundColor: COLORS.mainCardBg,
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
      color: theme.colors.primary,
    },
    cardSubTitle: {
      fontSize: 12,
      color: theme.colors.secondary,
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
      borderTopColor: theme.colors.outline,
      backgroundColor: COLORS.tabBarBg,
    },
  });
};
