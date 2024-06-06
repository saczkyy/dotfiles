import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { COLORS } from "constants/colors";

export const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    baseCard: {
      marginHorizontal: 24,
      marginBottom: 0,
      backgroundColor: COLORS.baseCardBg,
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
      marginBottom: 8,
      alignItems: "baseline",

      gap: 4,
    },
    title: {
      fontSize: 22,
      lineHeight: 22,
      color: theme.colors.primary,
    },
    subtitle: {
      fontSize: 12,
      lineHeight: 12,
      color: theme.colors.secondary,
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
};