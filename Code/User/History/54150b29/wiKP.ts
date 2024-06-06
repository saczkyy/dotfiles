import { ReactNode } from "react";
import { StyleProp } from "react-native";
import { CardProps } from "react-native-paper";
import { Style } from "react-native-paper/lib/typescript/components/List/utils";

export type ClickableOutlinedCardProps = {
  style?: Style;
  children: ReactNode;
  onPress: Function;
};
