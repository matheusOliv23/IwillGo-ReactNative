import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const participants = [
    "Matheus",
    "Carlos",
    "Gustavo",
    "Danilo",
    "Michael",
    "Jose",
    "Pedro",
    "Bianca",
  ];

  function handleParticipantAdd() {
    console.log("clicou em adicionar");
  }
  function handleParticipantRemove(name: string) {
    console.log(`clicou em remover ${name}`);
  }

  const renderItem = ({ item }: { item: string }) => {
    return (
      <Participant
        onRemove={() => handleParticipantRemove("Matheus")}
        name={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Quarta, 02 de Novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={renderItem}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento? Adicione participantes a sua lista de
            presença.
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
