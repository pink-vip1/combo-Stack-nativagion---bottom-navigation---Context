import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function IconButton({ title, bgColor, textColor, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: bgColor }]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});