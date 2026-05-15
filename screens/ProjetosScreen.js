import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';

export default function ProjetosScreen() {
  const [mensagem, setMensagem] = useState('');

  function enviarContato() {
    Alert.alert(
      'Sucesso',
      'Contato enviado com sucesso!'
    );

    setMensagem('');
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Projetos
      </Text>

      <View style={styles.card}>
        <Text style={styles.project}>
          App Delivery
        </Text>

        <Text>
          Aplicativo desenvolvido em React Native.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.project}>
          Catálogo de Produtos
        </Text>

        <Text>
          Projeto utilizando filtros e navegação.
        </Text>
      </View>

      <Text style={styles.title}>
        Contato
      </Text>

      <Text style={styles.info}>
        Email: rebeca.g.alves@aluno.senai.br
      </Text>

      <Text style={styles.info}>
        GitHub: github.com/bekilds
      </Text>

      <Text style={styles.info}>
        LinkedIn: linkedin.com/rebeca
      </Text>

      <TextInput
        placeholder="Digite sua mensagem"
        style={styles.input}
        multiline
        value={mensagem}
        onChangeText={setMensagem}
      />

      <Button
        title="Enviar contato"
        onPress={enviarContato}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },

  card: {
    backgroundColor: '#ffe4f2',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  project: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  info: {
    fontSize: 16,
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    height: 120,
    marginTop: 20,
    marginBottom: 20,
  },
});