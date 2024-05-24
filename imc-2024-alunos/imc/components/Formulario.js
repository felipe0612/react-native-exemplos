import React, { useState} from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from "react-native";
import calculaImc from "./Imc";

// 
const Formulario = () => {
    // 
    const [nome, setNome] = useState ("");
    const [peso, setPeso] = useState ("");
    const [altura, setAltura] = useState ("");
}

// 
const capturaNome = (valor) => {
    setNome(valor);
};
const capturaPeso = (valor) => {
    setPeso(valor);
};
const capturaAltura = (valor) => {
    setAltura(valor);
};

// 
const cacularImcHandler = () => {
    // 
    if (!peso || !altura) {
        Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
        return;
    }
}