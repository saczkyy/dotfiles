import { PhysicalFormScreen } from "screens/PhysicalFormScreen";
import { StatusBar } from "expo-status-bar";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <StatusBar style="auto" />
      <PhysicalFormScreen />
    </PaperProvider>
  );
}
