import React from "react";
import {
  Text,
  Button,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';


export function PayamentsBottom() {
  return (
    <View style={style.style1}>
      <View style={style.style10}>
        <View style={style.style9}>
          <FontAwesome name="user-circle" size={100} color="black" />
        </View>
        <Text style={{fontSize:25, color: "white"}}>Nome do Usuário</Text>
      </View>
      <View style={style.style2}>
        <View style={style.style4}>
          <View style={style.style6}>
            <View style={style.style3}>
              <Text style={style.style8}>Pagamento</Text>
              <Text style={style.style8}>Código: 9864513</Text>
              <Text style={style.style8}>vencimento: 06/05/2024</Text>
            </View>
            <View style={style.style7}>
              <Text>Valor: 69</Text>
            </View>
          </View>
          <View style={{ borderBottomWidth: 0.6 }}></View>
          <TouchableOpacity style={style.style5}>
            <Text style={{ color: "white" }}>PAGAR</Text>
          </TouchableOpacity>
        </View>
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
    flex: 0.7,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
  },
  style3: {
    alignItems: "flex-start",
    width: "80%",
  },
  style4: {
    
    height: "35%",
    width: "90%",
    marginTop: 25,
    borderRadius: 10,
    justifyContent: "space-evenly",
    padding: 5,
    backgroundColor: "#fff",
  },
  style5: {
    height: "25%",
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 10,
    backgroundColor: "#0066cb",
  },
  style6: {
    
    height: "50%",
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    flexDirection: "row",
  },
  style7: {
    fontSize: 20,
    alignContent: "center",
    width: "20%",
    justifyContent: "center",
  },
  style8: {
    fontSize: 16,
  },
  style9: {
    borderWidth: 2,
    width: "25%",
    height: "50%",
    
    alignSelf: "center",
    backgroundColor: "#f1f1f1",
    justifyContent:"center",
    alignItems:"center"
  },
  style10:{
    borderWidth: 2,
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  }
});
