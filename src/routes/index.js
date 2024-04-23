import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StartScreen } from "../screen/startScreen";
import { NavigationStack } from "./stackNavigation";

export function Routes() {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
