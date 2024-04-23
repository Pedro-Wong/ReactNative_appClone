import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export function LoginScreen({ navigation }) {
  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <TextInput style={style.style7} placeholder="Username" />
        <TextInput style={style.style7} placeholder="password" />
        <TouchableOpacity style={style.style5}>
          <Text style={style.style6}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("StarScreen")}>
          <Text style={style.style6}>Back to start</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={style.style3}>
        <TouchableOpacity style={style.style5}>
          <Text style={style.style6}>LOGIN SCREEN</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    flex: 1,
    backgroundColor: "blue",
    width: "100%",
  },
  style2: {
    flex: 1,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 20,
  },
  style3: {},
  style4: {},
  style5: {
    width: "40%",
    backgroundColor: "blue",
    alignSelf: "center",
    justifyContent: "center",
    height: "8%",
    borderRadius: 100,
  },
  style6: {
    alignSelf: "center",
    fontSize: 18,
  },
  style7: {
    width: "90%",
    borderRadius: 100,
    height: "7%",
    backgroundColor: "white",
  },
});
