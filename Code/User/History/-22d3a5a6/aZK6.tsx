import React from "react";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

import { UnpressableRadioButtonProps } from "./UnpressableRadioButton.types";
import { RadioButton } from "react-native-paper";

export const UnpressableRadioButton = ({
  nowChecked,
  value,
}: UnpressableRadioButtonProps) => {
  return (
    <RadioButton
      value={value}
      status={nowChecked === value ? "checked" : "unchecked"}
      //Workaround for removing ripple effect on press
      theme={{
        colors: {
          primary: "#00000000",
          onSurfaceDisabled:
            nowChecked === value
              ? defaultTheme.colors.primary
              : defaultTheme.colors.onSurfaceVariant,
          onSurface: "#00000000",
        },
      }}
      disabled
    />
  );
};
