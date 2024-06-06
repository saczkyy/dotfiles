import { PhysicalFormScreen } from "screens/PhysicalFormScreen";
import { RegistrationScreen } from "screens/RegistrationScreen";
import { CompletionScreen } from "screens/CompletionScreen";
import { LoginScreen } from "screens/LoginScreen";

import { StatusBar } from "expo-status-bar";
import { MD3LightTheme, PaperProvider } from "react-native-paper";
//This import is required for translations to work correctly
import "translation/i18n";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "navigation/navigation";
import { Paths } from "navigation/paths";
import { WelcomeScreen } from "screens/WelcomeScreen";
import { COLORS } from "constants/colors";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName={Paths.PhysicalForm}>
          <Stack.Screen name={Paths.Welcome} component={WelcomeScreen} />
          <Stack.Screen name={Paths.Login} component={LoginScreen} />
          <Stack.Screen
            name={Paths.Registration}
            component={RegistrationScreen}
          />
          <Stack.Screen
            name={Paths.PhysicalForm}
            component={PhysicalFormScreen}
          />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}