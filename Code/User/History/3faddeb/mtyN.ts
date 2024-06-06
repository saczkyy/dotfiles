import { Dimensions, StyleSheet } from "react-native";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

const windowPadding = 24;
const cardWidth = (Dimensions.get("screen").width - 2 * windowPadding - 20) / 2;
export const styles = StyleSheet.create({
  instructions: {
    margin: windowPadding,
    marginTop: 64,
    color: defaultTheme.colors.tertiary,
    fontSize: 18,
    textAlign: "center",
  },
  question: {
    margin: windowPadding,
    color: defaultTheme.colors.primary,
    fontSize: 28,
    textAlign: "center",
    fontWeight: "600",
  },
  answersWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginHorizontal: windowPadding,
    marginTop: 72,
  },
  activeCard: {
    backgroundColor: "#E8F4D8",
  },
  card: {
    width: cardWidth,
    height: cardWidth,
  },
  cardWrapper: {
    display: "flex",
    paddingVertical: 14,
    gap: 10,
    alignItems: "center",
  },
  answerText: {
    color: defaultTheme.colors.secondary,
    fontSize: 18,
    lineHeight: 20,
    textAlign: "center",
  },
  remindersSpaceTaker: {
    minHeight: 88,
    margin: windowPadding + 8,
  },
  remindersWrapper: {
    display: "flex",
    gap: 12,
  },
  remindersLabel: {
    color: defaultTheme.colors.tertiary,
    fontSize: 16,
    textAlign: "center",
  },
  buttonWrapper: {
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: windowPadding,
    marginTop: windowPadding - 8,
    gap: 12,
  },
  segmentedButton: { height: 36, display: "flex", justifyContent: "center" },
  button: {
    width: cardWidth,
    height: 32,
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
  },
  buttonLabelStyle: {
    height: "100%",
    textAlignVertical: "center",
  },
});
