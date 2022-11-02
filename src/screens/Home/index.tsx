import React from "react";
import { Text, View, TextInput } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quarta, 02 de Novembro de 2022</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor="#6b6b6b"
      />
    </View>
  );
}
