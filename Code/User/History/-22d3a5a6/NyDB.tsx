import React from "react";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

import { UnpressableRadioButtonProps } from "./UnpressableRadioButton.types";
import { RadioButton } from "react-native-paper";
import { COLORS } from "constants/colors";

export const UnpressableRadioButton = ({
  nowChecked,
  value,
}: UnpressableRadioButtonProps) => {
  return (
    <RadioButton
      value={value}
      //Workaround for removing ripple effect on press
      status={nowChecked === value ? "checked" : "unchecked"}
      theme={{
        colors: {
          primary: COLORS.transparent,
          onSurfaceDisabled:
            nowChecked === value
              ? defaultTheme.colors.primary
              : defaultTheme.colors.onSurfaceVariant,
          onSurface: COLORS.transparent,
        },
      }}
      disabled
    />
  );
};
