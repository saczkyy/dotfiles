import { RegistrationScreen } from "screens/RegistrationScreen";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";
import "translation/i18n";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </PaperProvider>
  );
}
