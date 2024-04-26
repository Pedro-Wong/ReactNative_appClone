import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function WorkOut() {
  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <Text style={style.style3}>Ficha de Treino</Text>
        <View style={style.style4}>
          <MaterialIcons name="fitness-center" size={120} color="black" />
        </View>
        <View style={style.style5}>
          <View style={style.style8}>
            <Text style={style.style7}>Treino 1</Text>
          </View>
          <View style={style.style9}>
            <TouchableOpacity style={style.style10}>
              <Text style={style.style11}>Iniciar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.style5}>
          <View style={style.style8}>
            <Text style={style.style7}>Treino 2</Text>
          </View>
          <View style={style.style9}>
            <TouchableOpacity style={style.style10}>
              <Text style={style.style11}>Iniciar</Text>
            </TouchableOpacity>
          </View>
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
    
    justifyContent: "flex-end",
    backgroundColor: "#0066cb",
  },
  style2: {
    flex: 0.85,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    rowGap: 20,
  },
  style3: {
    fontSize: 25,
  },
  style4: {
  
    height: "20%",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  style5: {
   
    height: "20%",
    width: "85%",
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  style6: {
    borderWidth: 0.5,
    height: "10%",
    width: "85%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  style7: {
    fontSize: 20,
  },
  style8: {
   
    width: "70%",
  },
  style9: {
    
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    padding: 4
  },
  style10:{
    backgroundColor: "#0066cb",
    width: "100%",
    height: "40%",
    borderRadius: 10,
    alignItems:"center",
    justifyContent: "center"
    
  },
  style11:{
    color: "white"
  }
});
