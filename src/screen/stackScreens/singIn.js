import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";


export function SingIn({ navigation }) {
  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <TextInput style={style.style3} placeholder="Username" />
        <TextInput style={style.style3} placeholder="PassWord" />
        <TextInput style={style.style3} placeholder="Email" />
      </View>

      <View style={style.style4}>
        <View>
          <TouchableOpacity style={style.style5}>
            <Text style={style.style6}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={style.style5}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={style.style6}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    flex: 1,
    width: "100%",
    borderWidth: 0.5,
    justifyContent: "center",
  },
  style2: {
    flex: 0.6,
    borderWidth: 0.5,
    backgroundColor: "#a9a9a9",
    justifyContent: "center",
    rowGap: 40,
  },
  style3: {
    alignSelf: "center",
    borderWidth: 0.3,
    width: "90%",
    height: "12%",
  },
  style4: {
    flex: 0.4,
    justifyContent: "flex-end",
    borderWidth: 1,
    backgroundColor: "#e6e6fa",
  },
  style5: {
    width: "90%",
    backgroundColor: "green",
    alignSelf: "center",
    justifyContent: "center",
    height: "42%",
    borderRadius: 100,
  },
  style6: {
    alignSelf: "center",
  },
});
