import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export function HomeBottom() {
  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <FontAwesome name="user-circle" size={100} color="black" />
        <Text style={{color:"white", fontSize: 20}}>Nome do Usuário</Text>
      </View>
     
      <View style={style.style4}>
        {/* <Text>Funcionalidades</Text> */}
        <TouchableOpacity style={style.style5}>
          <View>
            <FontAwesome name="user" size={40} color="black" />
          </View>
          <View>
            <Text>Perfil</Text>
            <Text>Dados Cadastrais</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <MaterialCommunityIcons
              name="weight-kilogram"
              size={40}
              color="black"
            />
          </View>
          <View>
            <Text>Treino</Text>
            <Text>Ficha de exercicios</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <MaterialCommunityIcons
              name="account-details"
              size={40}
              color="black"
            />
          </View>
          <View>
            <Text>Matriculas</Text>
            <Text>Visualize seus planos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <FontAwesome name="credit-card" size={40} color="black" />
          </View>
          <View>
            <Text>Pagamentos</Text>
            <Text>Central de cobranças</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <MaterialCommunityIcons name="ladder" size={40} color="black" />
          </View>
          <View>
            <Text>Avaliações</Text>
            <Text>Veja sua evolução</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <Fontisto name="date" size={40} color="black" />
          </View>
          <View>
            <Text>Frequência</Text>
            <Text>Consulte seus acessos</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  style1: {
    flex: 1,
  },
  style2: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0066cb",
    gap: 5
  },
  style4: {
    flex: 0.75,
    backgroundColor: "#f1f1f1",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between",
    columnGap: 30,
  },
  style5: {
    borderRadius: 12,
    width: "40%",
    height: "30%",
    marginBottom: 10,
    marginTop: 5,
    justifyContent: "space-evenly",
    paddingLeft: 15,
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  style6: {},
});
