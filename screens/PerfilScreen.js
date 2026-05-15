import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/perfil.png')}
        style={styles.image}
      />

      <Text style={styles.nome}>
        Rebeca Gabrielly
      </Text>

      <Text style={styles.cargo}>
        Desenvolvedora Mobile Jr
      </Text>

      <Text style={styles.sobre}>
        Estudante de Desenvolvimento de Sistemas
        apaixonada por tecnologia e criação de apps.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginBottom: 20,
  },

  nome: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  cargo: {
    fontSize: 18,
    color: '#777',
    marginTop: 5,
    marginBottom: 20,
  },

  sobre: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
});