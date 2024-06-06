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
        style={{ borderRadius: 12, height: "100%", backgroundColor: "#a4f453" }}
        borderless
      >
        <Card.Content style={{ height: "100%" }}>{children}</Card.Content>
      </TouchableRipple>
    </Card>
  );
};
