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
      <TouchableRipple onPress={onPress} style={styles.ripple} borderless>
        <Card.Content style={styles.cardContent}>{children}</Card.Content>
      </TouchableRipple>
    </Card>
  );
};
