import { RegistrationScreen } from "screens/RegistrationScreen";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
//This import is required for translations to work correctly
import "translation/i18n";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </PaperProvider>
  );
}
