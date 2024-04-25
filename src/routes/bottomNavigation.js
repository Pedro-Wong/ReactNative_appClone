import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Login } from "../screen/stackScreens/singIn";
import { HomeBottom } from "../screen/bottomScreens/HomeBottom";
import { PayamentsBottom } from "../screen/bottomScreens/PayamentsBottom";
import { WorkOut } from "../screen/bottomScreens/WorkOut";
import { SettingsBottom } from "../screen/bottomScreens/SettingsBottom";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTab() {
  return (
    <Navigator
      initialRouteName="HomeBottom"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Ínicio" component={HomeBottom} options={{
        tabBarIcon: () => {
          return <FontAwesome name="home" size={24} color="black" />
        }

      }}/>

      <Screen name="Treinos" component={WorkOut} options={{
        tabBarIcon: () => {
          return <MaterialCommunityIcons name="weight-lifter" size={24} color="black" />
        }
      }}/>
     
      <Screen name="Pagamentos" component={PayamentsBottom} options={{
        tabBarIcon: () => {
          return <MaterialIcons name="payments" size={24} color="black" />
        }
      }}/>
      <Screen name="Configurações" component={SettingsBottom} options={{
        tabBarIcon: () => {
          return <Ionicons name="settings" size={24} color="black" />
        }
      }}/>
    </Navigator>
  );
}
