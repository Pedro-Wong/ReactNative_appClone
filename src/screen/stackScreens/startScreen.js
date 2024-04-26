import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

export function StartScreen({ navigation }) {
  return (
    <View style={style.style1}>

      <View style={{ width:"100%"}}>
        <Text style={{alignSelf: "center", fontSize: 35, fontWeight: "bold", color: "#f1f1f1" }}>SCA</Text>
      </View>
      
      <View style={style.style2}>
        <Text style={style.style8}>Seja muito bem vindo ao SCA Aluno!</Text>
        <View style={style.style4}>
          <Image style={{width: "100%", height: "100%"}} source={require('../../../assets/loginImage.jpeg')}/>
        </View>
        
        <View style={style.style3}>
          <Text style={{alignSelf: "center", fontSize: 18, fontWeight: "bold"}}>Digite seu Email:</Text>
          <TextInput style={style.style5}>
            
          </TextInput>

          <TouchableOpacity
            style={style.style7}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={style.style6}>CONTINUAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    flex: 1,
    backgroundColor: "#0066cb",
    width: "100%",
    justifyContent: "flex-end",
  },
  style2: {
    flex: 0.9,
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
  },
  style3: {
    
    width: "90%",
    backgroundColor: "#f1f1f1",
    justifyContent: "center",
    rowGap: 10,
  },
  style4: {
   
    width: "60%",
    height: "27%",
  },
  style5: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 0.6,
    height: "20%",
    borderRadius: 10,
  },
  style6: {
    alignSelf: "center",
    color: "white"
  },
  style7:{
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    height: "20%",
    borderRadius: 10,
    backgroundColor: "#0066cb",
    
  },
  style8:{
    fontSize: 20,
  }
});
