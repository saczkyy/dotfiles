import React from "react";
import { View } from "react-native";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

import { styles } from "./UnpressableRadioButton.styles";
import { UnpressableRadioButtonProps } from "./UnpressableRadioButton.types";
import { RadioButton } from "react-native-paper";

export const UnpressableRadioButton = ({
  nowChecked,
  value,
}: UnpressableRadioButtonProps) => {
  return (
    <RadioButton
      theme={{
        colors: {
          primary: "#00000000",
          onSurfaceDisabled:
            checked === value
              ? defaultTheme.colors.primary
              : defaultTheme.colors.onSurfaceVariant,
          onSurface: "#00000000",
        },
      }}
      // color={defaultTheme.colors.primary}
      disabled
      value={value}
      status={checked === value ? "checked" : "unchecked"}
    />
  );
};
