import React from 'react';
import { View, Text, StyleSheet, Image, Linking, Button } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre os Desenvolvedores 👩‍💻👨‍💻</Text>
      <Image source={require('../../assets/team.jpg')} style={styles.image} />
      <Image source={require('../../assets/earthteam.jpg')} style={styles.image} />
      <Text style={styles.text}>
        Somos estudantes apaixonados por tecnologia e meio ambiente. Criamos este app para conscientizar sobre a importância de cuidar do planeta.
      </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
});
