import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screen/stackScreens/startScreen";

import { LoginScreen } from "../screen/stackScreens/login";
import { BottomTab } from "./bottomNavigation";

const { Navigator, Screen } = createStackNavigator();

export const NavigationStack = () => {
  return (
    <Navigator
      initialRouteName="StartScreen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="StartScreen" component={StartScreen}></Screen>
      <Screen name="SwitchToTab" component={BottomTab} />
      <Screen name="LoginScreen" component={LoginScreen} />
    </Navigator>
  );
};
