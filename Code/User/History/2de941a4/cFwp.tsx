import React from "react";
import { Card, TouchableRipple } from "react-native-paper";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { Pressable } from "react-native";

import {
  styles,
  clickableOutlinedCardAnimation,
} from "./ClickableOutlinedCard.styles";
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
        borderless
      >
        <Card.Content>{children}</Card.Content>
      </TouchableRipple>
    </Card>
  );
};
