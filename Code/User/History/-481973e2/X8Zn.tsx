import { RegistrationScreen } from "screens/RegistrationScreen";
import { HomeScreen } from "screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <HomeScreen />
    </PaperProvider>
  );
}
