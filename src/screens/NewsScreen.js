import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Linking } from 'react-native';

export default function NewsScreen() {
  const news = [
    {
      title: "Mudanças Climáticas Aceleram",
      url: "https://www.bbc.com/portuguese/internacional-58478903"
    },
    {
      title: "Como Reduzir sua Pegada de Carbono",
      url: "https://www.wwf.org.br/?78642/pegada-de-carbono"
    },
    {
      title: "Aquecimento Global: O Que Você Precisa Saber",
      url: "https://www.nationalgeographicbrasil.com/meio-ambiente/2021/11/aquecimento-global-o-que-e"
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Notícias Ambientais 📰</Text>

      {news.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Button
            title="Ler mais"
            onPress={() => Linking.openURL(item.url)}
          />
        </View>
      ))}
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
  card: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
