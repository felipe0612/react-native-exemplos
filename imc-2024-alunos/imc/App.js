import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Formulario from "./components/Formulario";

// Define o componente principal
export default function App() {
  // Retorna a estrutura dis componentes com os elementos da interface de usuário 
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="auto" />
      <View style={estilos.boxTitulo}>
      <Text style={estilos.titulo}>App IMC</Text>
    </View>
    <Formulario />
    </SafeAreaView>
  );
}

// Css

const estilos = StyleSheet.create({
  container: {
 flex: 1,
  },
  boxTitulo: {
    paddingVertical: 50,
    backgroundColor: "black",
  },
  titulo: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
});
