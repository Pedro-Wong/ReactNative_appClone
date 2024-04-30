import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function LoginScreen({ navigation }) {
  const [senha, setSenha] = useState();
  console.log(senha)
 
  const verificacaoSenha = function () {
    if(senha === "123") {
       navigation.navigate("SwitchToTab");
    } else {
       navigation.navigate("LoginScreen");
     }
    };

  return (
    <View style={style.style1}>
      <View style={{ width: "100%", flex:0.15, justifyContent:"center" }}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 35,
            fontWeight: "bold",
            color: "#f1f1f1",
          }}
        >
          SCA
        </Text>
      </View>

      <View style={style.style2}>
        <Text style={style.style8}>Academia Exemplo</Text>
        <View style={style.style4}>
          <FontAwesome
            name="user"
            size={130}
            color="black"
            style={{ alignSelf: "center" }}
          />
          <Text style={{ alignSelf: "center" }}>Nome do Usuário</Text>
        </View>

        <View style={style.style3}>
          <Text
            style={{ alignSelf: "center", fontSize: 18, fontWeight: "bold" }}
          >
            Digite sua senha
          </Text>
          <TextInput
            style={style.style5}
            placeholder="Senha: 123"
            onChangeText={(senha)=>setSenha(senha)}
          ></TextInput>

          <TouchableOpacity style={style.style7} onPress={()=>verificacaoSenha()} >
            <Text style={style.style6}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => {
              navigation.navigate("StartScreen");
            }}
          >
            <Text style={{ fontSize: 20 }}>Voltar</Text>
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
    justifyContent: "center",
  },
  style2: {
    flex: 0.85,
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
    borderRadius: 4,
    width: "60%",
    height: "27%",
    backgroundColor: "white",
  },
  style5: {
    width: "100%",
    backgroundColor: "white",
    borderWidth: 0.6,
    height: "20%",
    borderRadius: 10,
    padding: 8,
  },
  style6: {
    alignSelf: "center",
    color: "white",
  },
  style7: {
    width: "100%",
    backgroundColor: "white",
    alignSelf: "center",
    justifyContent: "center",
    height: "20%",
    borderRadius: 10,
    backgroundColor: "#0066cb",
  },
  style8: {
    fontSize: 20,
  },
});
