import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function HabilidadesScreen() {
  const habilidades = [
    'React Native',
    'JavaScript',
    'HTML',
    'CSS',
    'Git e GitHub',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Minhas Habilidades
      </Text>

      <FlatList
        data={habilidades}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>
              {item}
            </Text>
          </View>
        )}
      />
    </View>
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
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#ffe4f2',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  text: {
    fontSize: 18,
  },
});