import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export function WorkOut() {
  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <Text style={style.style3}>Ficha de Treino</Text>
        <View style={style.style4}>
          <Text>Imagem</Text>
        </View>
        <View style={style.style5}>
          <Text style={style.style7}>Treino 1</Text>
        </View>
        <View style={style.style5}>
          <Text style={style.style7}>Treino 2</Text>
        </View>
        <TouchableOpacity style={style.style6}>
          <Text>Histórico de treino</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    flex: 1,
    borderWidth: 2,
    justifyContent: "flex-end",
    backgroundColor: "lightblue"
    
  },
  style2: {
    flex: 0.9,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "red",
    rowGap: 20
  },
  style3: {
    fontSize: 25,
  },
  style4: {
    borderWidth: 2,
    height: "20%",
    width: "40%",
  },
  style5: {
    borderWidth: 2,
    height: "20%",
    width:"85%",
    
  },
  style6:{
    borderWidth: 2,
    height: "10%",
    width:"85%",
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center"
  },
  style7:{
    fontSize: 20
  }
});
