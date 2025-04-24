import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

export default function CityFormScreen() {
  const [cidade, setCidade] = useState('');
  const [pais, setPais] = useState('');

  const handleSubmit = () => {
    if (!cidade || !pais) {
      Alert.alert('Atenção', 'Por favor, preencha todos os campos.');
      return;
    }

    Alert.alert('Cadastro realizado!', `Cidade: ${cidade}\nPaís: ${pais}`);
    setCidade('');
    setPais('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Cidade 🌍</Text>

      <Image source={require('/assets/images/mapa.jpg')} style={styles.imagem} />

      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o país"
        value={pais}
        onChangeText={setPais}
      />

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>

      <Image source={require('/assets/images/location.jpg')} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eafaf1',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#14532d',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  botao: {
    backgroundColor: '#166534',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  imagem: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
});
