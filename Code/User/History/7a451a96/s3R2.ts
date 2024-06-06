import { StyleSheet } from "react-native";
import { MD3LightTheme as defaultTheme } from "react-native-paper";
import {
  SharedValue,
  useAnimatedStyle,
  interpolateColor,
} from "react-native-reanimated";

export const clickableOutlinedCardAnimation = (
  progress: SharedValue<number>
) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#FFFEFF", "#ECDFF4"]
      ),
    };
  });
  return [animatedStyle, { borderRadius: 12, height: "100%" }];
};

export const styles = StyleSheet.create({
  card: {},
});
