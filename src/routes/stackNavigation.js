import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screen/stackScreens/startScreen";
import { SingIn } from "../screen/stackScreens/singIn";
import { LoginScreen } from "../screen/stackScreens/login";

const { Navigator, Screen } = createStackNavigator();

export const NavigationStack = () => {
  return (
    <Navigator
      initialRouteName="StartScreen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="StartScreen" component={StartScreen}></Screen>
      <Screen name="SingIn" component={SingIn} />
      <Screen name="LoginScreen" component={LoginScreen} />
    </Navigator>
  );
};
