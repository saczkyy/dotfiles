import { COLORS } from "constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.baseCardBg,
  },
  ripple: {
    borderRadius: 12,
    height: "100%",
  },
  cardContent: { height: "100%" },
});
