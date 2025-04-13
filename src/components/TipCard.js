import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TipCard({ tip }) {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{tip}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});
