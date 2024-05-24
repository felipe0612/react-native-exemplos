import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Formulario from "./components/Formulario";

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="auto"/>
      <View style={estilos.boxTitulo}>
        <Text style={estilos.titulo}>App IMC</Text>
      </View>
      <Formulario/>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create ({
  container: {
    flex: 1,
  },

  boxTitulo: {
    backgroundColor: "black",
    paddingVertical: 50,
  },

  titulo: {
    color: "white",
    fontSize: 24,
    textAlign: "center",  
    fontWeight: "bold",
  },

});