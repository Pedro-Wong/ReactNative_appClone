import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StartScreen } from "../screen/stackScreens/startScreen";
import { NavigationStack } from "./stackNavigation";
import { BottomTab } from "./bottomNavigation";

export function Routes() {
  const auth = false;
  return (
    <NavigationContainer>
      {auth ? <NavigationStack/> : <BottomTab />}
    </NavigationContainer>
  );
}
