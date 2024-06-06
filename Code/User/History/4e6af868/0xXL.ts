import { RootStackParamList } from "navigation/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { Paths } from "navigation/paths";

export type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, Paths.Login>;
};

export type LoginForm = {
  email: string;
  password: string;
};

export type LoginUserData = {
  email: string;
  password: string;
};
