import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function StartScreen({ navigation }) {
  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <Text></Text>
      </View>

      <View style={style.style3}>
        <TouchableOpacity style={style.style5} onPress={() => navigation.navigate('LoginScreen') }>
          <Text style={style.style6}>Login in you account</Text>
        </TouchableOpacity>
      </View>

      <View style={style.style4}>
        <TouchableOpacity
          style={style.style5}
          onPress={() => navigation.navigate("SingIn")}
        >
          <Text style={style.style6}>Sign up</Text>
        </TouchableOpacity>
      </View>
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
    flex: 0.6,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  style3: {
    backgroundColor: "green",
    flex: 0.2,
    justifyContent: "center",
  },
  style4: {
    backgroundColor: "orange",
    flex: 0.2,
    justifyContent: "flex-start",
  },
  style5: {
    width: "90%",
    backgroundColor: "blue",
    alignSelf: "center",
    justifyContent: "center",
    height: "42%",
    borderRadius: 100,
  },
  style6: {
    alignSelf: "center",
  },
});
