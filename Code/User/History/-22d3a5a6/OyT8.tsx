import React from "react";
import { useTheme } from "react-native-paper";

import { UnpressableRadioButtonProps } from "./UnpressableRadioButton.types";
import { RadioButton } from "react-native-paper";
import { COLORS } from "constants/colors";

export const UnpressableRadioButton = ({
  nowChecked,
  value,
}: UnpressableRadioButtonProps) => {
  const theme = useTheme();
  return (
    <RadioButton
      value={value}
      status={nowChecked === value ? "checked" : "unchecked"}
      //Workaround for removing ripple effect on press
      theme={{
        colors: {
          primary: COLORS.transparent,
          onSurfaceDisabled:
            nowChecked === value
              ? theme.colors.primary
              : theme.colors.onSurfaceVariant,
          onSurface: COLORS.transparent,
        },
      }}
      disabled
    />
  );
};
