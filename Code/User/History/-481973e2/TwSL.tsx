import { RegistrationScreen } from "screens/RegistrationScreen";
import { HomeScreen } from "screens/HomeScreen";
import { CompletionScreen } from "screens/CompletionScreen";
import { LoginScreen } from "screens/LoginScreen";

import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
//This import is required for translations to work correctly
import "translation/i18n";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "navigation/navigation";
import { Paths } from "navigation/paths";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName={Paths.Home}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name={Paths.Login} component={LoginScreen} />
          <Stack.Screen
            name={Paths.Registration}
            component={RegistrationScreen}
          />
          <Stack.Screen name={Paths.Home} component={HomeScreen} />
          <Stack.Screen name={Paths.Completion} component={CompletionScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
