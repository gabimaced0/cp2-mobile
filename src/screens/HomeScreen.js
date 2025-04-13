import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao ClimaConsciente 🌎</Text>
      <Image source={require('/Users/gabriellymacedo/Downloads/aq-global/assets/earth.jpg')} style={styles.image} />
      <Image source={require('/Users/gabriellymacedo/Downloads/aq-global/assets/forest.jpg')} style={styles.image} />
      <Button title="Ver Clima Atual" onPress={() => navigation.navigate('Clima')} />
      <Button title="Dicas Ambientais" onPress={() => navigation.navigate('Dicas')} />
      <Button title="Sobre Nós" onPress={() => navigation.navigate('Sobre')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
});
