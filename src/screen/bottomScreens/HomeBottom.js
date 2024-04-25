import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export function HomeBottom() {
  return (
    <View style={style.style1}>
      <View style={style.style2}>
        <View
          style={{
            borderWidth: 2,
            width: "30%",
            height: "50%",
            borderRadius: 100,
          }}
        ></View>
      </View>
      <View style={style.style4}>
        {/* <Text>Funcionalidades</Text> */}
        <TouchableOpacity style={style.style5}>
          <View style={{}}>
            <Text>Imagem</Text>
          </View>
          <View>
            <Text>Perfil</Text>
            <Text>Dados Cadastrais</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <Text>Imagem</Text>
          </View>
          <View>
            <Text>Treino</Text>
            <Text>Ficha de exercicios</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <Text>Imagem</Text>
          </View>
          <View>
            <Text>Matriculas</Text>
            <Text>Visualize seus planos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <Text>Imagem</Text>
          </View>
          <View>
            <Text>Pagamentos</Text>
            <Text>Central de cobranças</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <Text>Imagem</Text>
          </View>
          <View>
            <Text>Avaliações</Text>
            <Text>Veja sua evolução</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.style5}>
          <View>
            <Text>Imagem</Text>
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
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  style4: {
    flex: 0.8,
    backgroundColor: "green",
    flexWrap: "wrap",
    alignContent: "center",
    justifyContent: "space-between",
    columnGap: 30,
  },
  style5: {
    borderWidth: 2,
    borderRadius: 12,
    width: "40%",
    height: "30%",
    marginBottom: 10,
    marginTop: 5,
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingBottom: 10,
  },
  style6: {},
});
