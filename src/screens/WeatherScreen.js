import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { fetchWeather } from '../services/weatherApi';
import WeatherCard from '../components/WeatherCard';

export default function WeatherScreen() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error) {
      console.error('Erro ao buscar o clima:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Clima 🌦️</Text>
      <Image source={require('../../assets/weather.jpg')} style={styles.image} />
      <Image source={require('../../assets/cloudy.jpg')} style={styles.image} />
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Buscar" onPress={handleSearch} />
      {weather && <WeatherCard weather={weather} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
});
