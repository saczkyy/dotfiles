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
  const progress = useSharedValue(0);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const handlePressIn = () => {
    progress.value = withSpring(1);
  };
  const handlePressOut = () => {
    progress.value = withSpring(0);
    onPress();
  };

  return (
    <Card style={[styles.card, style]} mode="outlined">
      <TouchableRipple
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={{ borderRadius: 14 }}
      >
        <Card.Content>{children}</Card.Content>
      </TouchableRipple>
    </Card>
  );
};
