import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, Linking } from 'react-native';
import TipCard from '../components/TipCard';

export default function TipsScreen() {
  const tips = [
    "Desligue a torneira enquanto escova os dentes.",
    "Use transporte público ou bicicleta.",
    "Plante árvores sempre que possível.",
    "Separe corretamente o lixo reciclável.",
    "Prefira produtos locais e orgânicos."
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dicas Ambientais 🌱</Text>
      
      <Image source={require('../../assets/savewater.jpg')} style={styles.image} />
      <Image source={require('../../assets/bicycle.jpg')} style={styles.image} />

      {tips.map((tip, index) => (
        <TipCard key={index} tip={tip} />
      ))}

      <View style={styles.buttonContainer}>
        <Button
          title="Conheça o Greenpeace 🌎"
          onPress={() => Linking.openURL('https://www.greenpeace.org/brasil/')}
          color="#4CAF50"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
  },
});
