import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StartScreen } from "../screen/startScreen";
import { SingIn } from "../screen/singIn";

const { Navigator, Screen } = createStackNavigator();

export const NavigationStack = () => {
  return (
    <Navigator
      initialRouteName="StartScreen"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="StartScreen" component={StartScreen}></Screen>
      <Screen name="SingIn" component={SingIn} />
    </Navigator>
  );
};
