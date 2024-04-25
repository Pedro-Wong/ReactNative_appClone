import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";
import { Login } from "./src/screen/stackScreens/singIn";
import { StartScreen } from "./src/screen/stackScreens/startScreen";
import { Routes } from "./src/routes";
import { LoginScreen } from "./src/screen/stackScreens/login";

export default function App() {
  return <Routes />;
}
