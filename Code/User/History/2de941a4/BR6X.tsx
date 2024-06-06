import React from "react";
import { View } from "react-native";
import { Card } from "react-native-paper";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";
import { Pressable } from "react-native";

import { styles } from "./ClickableOutlinedCard.styles";
import { ClickableOutlinedCardProps } from "./ClickableOutlinedCard.types";

export const ClickableOutlinedCard = ({
  children,
}): ClickableOutlinedCardProps => {
  const progress = useSharedValue(0);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const handlePressIn = () => {
    progress.value = withSpring(1);
  };
  const handlePressOut = () => {
    progress.value = withSpring(0);
  };

  return (
    <Card style={styles.answerCard} mode="outlined">
      <AnimatedPressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[clickableOutlinedCard(progress)]}
      >
        <Card.Content>{children}</Card.Content>
      </AnimatedPressable>
    </Card>
  );
};
