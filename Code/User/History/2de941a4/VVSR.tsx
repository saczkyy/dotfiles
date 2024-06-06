import React from "react";
import { Card } from "react-native-paper";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { Pressable } from "react-native";

import {
  styles,
  clickableOutlinedCardAnimation,
} from "./ClickableOutlinedCard.styles";
import { ClickableOutlinedCardProps } from "./ClickableOutlinedCard.types";

export const ClickableOutlinedCard = ({
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
  };

  return (
    <Card style={styles.card} mode="outlined">
      <AnimatedPressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[clickableOutlinedCardAnimation(progress)]}
      >
        <Card.Content>{children}</Card.Content>
      </AnimatedPressable>
    </Card>
  );
};
