import { View } from "react-native";
import { Text, Card, Button } from "react-native-paper";
import { useStyles } from "./BaseFormCard.styles";
import { BaseFormCardProps } from "./BaseFormCard.types";
import IconMI from "react-native-vector-icons/MaterialIcons";
import { useState } from "react";
import { COLORS } from "constants/colors";

export const BaseFormCard = ({ title, subtitle }: BaseFormCardProps) => {
  const styles = useStyles();
  const [wasFilledOut, setWasFilledOut] = useState(false);

  return (
    <Card style={styles.baseCard} mode="elevated">
      <Card.Content>
        <View style={styles.wrapper}>
          <View style={styles.cardText}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{title}</Text>
              {wasFilledOut ? (
                <IconMI
                  size={16}
                  name="check-circle"
                  color={COLORS.checkmarkGreen}
                />
              ) : null}
            </View>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
          <Button
            labelStyle={styles.buttonLabelStyle}
            style={styles.button}
            mode={wasFilledOut ? "outlined" : "contained"}
          >
            {wasFilledOut ? "Edit" : "Fill out"}
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
};
