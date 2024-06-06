import { useState } from "react";
import {
  Dimensions,
  ScrollView,
  View,
  useWindowDimensions,
} from "react-native";
import {
  TabView,
  SceneMap,
  TabBar,
  TabBarProps,
  Route,
} from "react-native-tab-view";
import { Text, Divider, Card } from "react-native-paper";
import IconFA from "react-native-vector-icons/FontAwesome";
import IconMI from "react-native-vector-icons/MaterialIcons";
import { MD3LightTheme as defaultTheme } from "react-native-paper";
import Constants from "expo-constants";
import { Pressable } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { styles } from "./HomeScreen.styles";
import { BaseFormCard } from "components/BaseFormCard";

export const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home" },
    { key: "settings", title: "Settings" },
  ]);
  const dimens = useWindowDimensions();
  const progress = useSharedValue(0);

  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const handlePressIn = () => {
    progress.value = withSpring(1);
    console.log("asdasd");
  };
  const handlePressOut = () => {
    progress.value = withSpring(0);
  };

  const tabBarIndicatorWidth = 64;
  const tabBarMargin = (dimens.width / 2 - 64) / 2;
  const renderTabBar = (props: TabBarProps<Route>) => (
    <TabBar
      {...props}
      style={styles.tabBar}
      activeColor={defaultTheme.colors.primary}
      inactiveColor={defaultTheme.colors.secondary}
      indicatorStyle={{
        backgroundColor: defaultTheme.colors.primary,
        width: tabBarIndicatorWidth,
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
      }}
      indicatorContainerStyle={{ marginHorizontal: tabBarMargin }}
    ></TabBar>
  );

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        ["#FFFEFF", "#F7F2FA"]
      ),
    };
  });
  const HomeRoute = () => (
    <ScrollView style={{ height: Dimensions.get("window").height + 64 }}>
      <Card style={styles.mainCard} mode="outlined">
        <AnimatedPressable
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[animatedStyle, { borderRadius: 12, height: "100%" }]}
        >
          <Card.Content>
            <View style={styles.mainCardWrapper}>
              <IconMI
                name="crisis-alert"
                color={defaultTheme.colors.tertiary}
                size={48}
              />
              <Text style={styles.cardTitle}>Main form</Text>
              <Text style={styles.cardSubTitle}>
                This form can help you if you're feeling unwell (TBD)
              </Text>
            </View>
          </Card.Content>
        </AnimatedPressable>
      </Card>
      <View style={styles.formCardsWrapper}>
        <BaseFormCard
          title="Physical form"
          subtitle="In this form you can tell us what reminders would you like us to send you (TBD)"
        />
        <BaseFormCard
          title="Physical form"
          subtitle="In this form you can tell us what reminders would you like us to send you (TBD)"
        />
        <BaseFormCard
          title="Physical form"
          subtitle="In this form you can tell us what reminders would you like us to send you (TBD)"
        />
        <BaseFormCard
          title="Physical form"
          subtitle="In this form you can tell us what reminders would you like us to send you (TBD)"
        />
      </View>
    </ScrollView>
  );
  const SettingsRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
  );
  const renderScene = SceneMap({
    home: HomeRoute,
    settings: SettingsRoute,
  });

  return (
    <View style={{ height: dimens.height + Constants.statusBarHeight }}>
      <View style={styles.topBar}>
        <View style={styles.avatar}>
          <IconFA
            name="user-circle"
            size={48}
            color={defaultTheme.colors.primary}
          />
        </View>
        <Text style={styles.usersName}>User's name</Text>
      </View>
      <Divider />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: dimens.width }}
        tabBarPosition="bottom"
        renderTabBar={renderTabBar}
      />
    </View>
  );
};
