import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ClickableOutlinedCardProps = {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress: () => void;
};
