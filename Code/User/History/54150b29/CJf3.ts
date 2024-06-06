import { ReactNode } from "react";
import { Style } from "react-native-paper/lib/typescript/components/List/utils";

export type ClickableOutlinedCardProps = {
  style?: Style;
  children: ReactNode;
  onPress: Function;
};
