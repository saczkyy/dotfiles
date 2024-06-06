import React from "react";
import { Card, TouchableRipple } from "react-native-paper";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

import { styles } from "./ClickableOutlinedCard.styles";
import { ClickableOutlinedCardProps } from "./ClickableOutlinedCard.types";

export const ClickableOutlinedCard = ({
  style = {},
  children,
  onPress,
}: ClickableOutlinedCardProps) => {
  return (
    <Card style={[styles.card, style]} mode="outlined">
      <TouchableRipple
        onPress={() => onPress()}
        style={{ borderRadius: 12, height: "100%" }}
        rippleColor={defaultTheme.colors.primary}
        borderless
      >
        <Card.Content>{children}</Card.Content>
      </TouchableRipple>
    </Card>
  );
};
