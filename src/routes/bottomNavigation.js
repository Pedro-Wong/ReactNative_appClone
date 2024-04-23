import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../screen/singIn";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTab() {
  return <Navigator></Navigator>;
}
