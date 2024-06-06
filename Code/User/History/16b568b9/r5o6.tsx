import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Divider, Menu, SegmentedButtons } from "react-native-paper";
import { MD3LightTheme as defaultTheme } from "react-native-paper";

import { styles } from "./PhysicalFormScreen.styles";
import { ClickableOutlinedCard } from "components/ClickableOutlinedCard";
import { UnpressableRadioButton } from "components/UnpressableRadioButton";

const availableRemainderTimeIntervals = [
  "15min",
  "30min",
  "45min",
  "1h",
  "2h",
  "3h",
  "4h",
  "5h",
  "6h",
  "7h",
  "8h",
  "9h",
  "10h",
  "11h",
  "12h",
];

export const PhysicalFormScreen = () => {
  const [answer, setAnswer] = useState("");
  const [reminderTimeIntervalSetting, setReminderTimeIntervalSetting] =
    useState("");
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [segmentedButtonsDimens, setSegmentedButtonsDimens] = useState({
    x: 0,
    y: 0,
    width: 0,
    buttonsHeight: 0,
    spaceTakerHeight: 0,
  });
  const [customTimeInterval, setCustomTimeInterval] = useState("");

  const openMenu = () => {
    setMenuVisibility(true);
  };
  const closeMenu = () => setMenuVisibility(false);

  const handleNextPress = () => {
    if (answer === "no") return `Answer: ${answer}`;

    if (customTimeInterval === "" && reminderTimeIntervalSetting !== "more")
      console.log(
        `Answer ${answer}, reminder settings: ${reminderTimeIntervalSetting}`
      );
    return;
    if (reminderTimeIntervalSetting !== "more") {
      console.log();
    }
  };
  return (
    <View>
      <Text style={styles.instructions}>
        Please select where you struggle to acknowledge sensations of physical
        discomfort
      </Text>
      <Divider />
      <Text style={styles.question}>
        Eating at least three times a day or noticing that you are hungry
      </Text>

      <View style={styles.answersWrapper}>
        <ClickableOutlinedCard
          style={[styles.card, answer === "yes" ? styles.activeCard : null]}
          onPress={() => {
            setAnswer("yes");
          }}
        >
          <View style={styles.cardWrapper}>
            <Text style={styles.answerText}>
              Yes, it is difficult for me to recognize it
            </Text>
            <UnpressableRadioButton value="yes" nowChecked={answer} />
          </View>
        </ClickableOutlinedCard>
        <ClickableOutlinedCard
          style={[styles.card, answer === "no" ? styles.activeCard : null]}
          onPress={() => setAnswer("no")}
        >
          <View style={styles.cardWrapper}>
            <Text style={styles.answerText}>I have no problems with that</Text>
            <UnpressableRadioButton value="no" nowChecked={answer} />
          </View>
        </ClickableOutlinedCard>
      </View>
      <View
        style={styles.remindersSpaceTaker}
        onLayout={(event) => {
          setSegmentedButtonsDimens({
            x: event.nativeEvent.layout.x,
            y: event.nativeEvent.layout.y,
            spaceTakerHeight: event.nativeEvent.layout.height,
            width: segmentedButtonsDimens.width,
            buttonsHeight: segmentedButtonsDimens.buttonsHeight,
          });
        }}
      >
        {answer === "yes" ? (
          <View style={styles.remindersWrapper}>
            <Text style={styles.remindersLabel}>
              How often would you like to be reminded about this problem?
            </Text>
            <View
              onLayout={(event) => {
                setSegmentedButtonsDimens({
                  x: segmentedButtonsDimens.x,
                  y: segmentedButtonsDimens.y,
                  spaceTakerHeight: segmentedButtonsDimens.spaceTakerHeight,
                  width: event.nativeEvent.layout.width,
                  buttonsHeight: event.nativeEvent.layout.height,
                });
              }}
            >
              <SegmentedButtons
                style={styles.segmentedButton}
                value={reminderTimeIntervalSetting}
                onValueChange={setReminderTimeIntervalSetting}
                buttons={[
                  {
                    labelStyle: [styles.buttonLabelStyle, { lineHeight: 16 }],
                    value: "1",
                    label: "1h",
                    onPress: () => setCustomTimeInterval(""),
                  },
                  {
                    labelStyle: [styles.buttonLabelStyle, { lineHeight: 16 }],
                    value: "3",
                    label: "3h",
                    onPress: () => setCustomTimeInterval(""),
                  },
                  {
                    labelStyle: [styles.buttonLabelStyle, { lineHeight: 16 }],
                    value: "6",
                    label: "6h",
                    onPress: () => setCustomTimeInterval(""),
                  },
                  {
                    labelStyle: [styles.buttonLabelStyle, { lineHeight: 16 }],
                    value: "more",
                    icon: "menu-down",
                    label: customTimeInterval,
                    style: customTimeInterval
                      ? {}
                      : { backgroundColor: "#FFFEFF" },
                    onPress: (event) => {
                      openMenu();
                    },
                  },
                ]}
              />
              <Menu
                visible={menuVisibility}
                onDismiss={closeMenu}
                style={{ width: 80 }}
                anchor={{
                  x:
                    segmentedButtonsDimens.x +
                    (segmentedButtonsDimens.width / 4) * 3,
                  y:
                    segmentedButtonsDimens.y +
                    segmentedButtonsDimens.spaceTakerHeight -
                    segmentedButtonsDimens.buttonsHeight,
                }}
              >
                <ScrollView style={{ maxHeight: 150 }}>
                  {availableRemainderTimeIntervals.map((time, index) => {
                    return (
                      <Menu.Item
                        key={index}
                        onPress={() => {
                          setCustomTimeInterval(time);
                          closeMenu();
                        }}
                        title={time}
                      />
                    );
                  })}
                </ScrollView>
              </Menu>
            </View>
          </View>
        ) : null}
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          labelStyle={styles.buttonLabelStyle}
          mode="outlined"
        >
          Back
        </Button>
        <Button
          style={styles.button}
          labelStyle={styles.buttonLabelStyle}
          mode="contained"
          disabled={
            (reminderTimeIntervalSetting === "" ||
              reminderTimeIntervalSetting === "more") &&
            customTimeInterval === "" &&
            answer !== "no"
          }
          onPress={handleNextPress}
        >
          Next
        </Button>
      </View>
    </View>
  );
};
