import React from "react";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

import { UnpressableRadioButtonProps } from "./UnpressableRadioButton.types";
import { RadioButton } from "react-native-paper";
import { COLORS } from "constants/colors";

export const UnpressableRadioButton = ({
  isChecked,
  value,
}: UnpressableRadioButtonProps) => {
  return (
    <RadioButton
      value={value}
      //Workaround for removing ripple effect on press
      status={isChecked === value ? "checked" : "unchecked"}
      theme={{
        colors: {
          primary: COLORS.transparent,
          onSurfaceDisabled:
            isChecked === value
              ? defaultTheme.colors.primary
              : defaultTheme.colors.onSurfaceVariant,
          onSurface: COLORS.transparent,
        },
      }}
      disabled
    />
  );
};
