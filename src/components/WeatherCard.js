import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherCard({ weather }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{weather.name}</Text>
      <Text>Temperatura: {weather.main.temp}°C</Text>
      <Text>Clima: {weather.weather[0].description}</Text>
      <Text>Vento: {weather.wind.speed} m/s</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    margin: 10,
    backgroundColor: '#d0f0c0',
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
