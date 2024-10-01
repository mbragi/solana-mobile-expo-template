import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComingSoonScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coming Soon</Text>
      <Text style={styles.message}>
        Stay tuned for this exciting feature! 
      </Text>
    </View>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40, // Equivalent to text-4xl
    fontWeight: 'bold',
    marginBottom: 20, // Equivalent to mb-5
  },
  message: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18, // Equivalent to text-lg
    paddingHorizontal: 20, // Equivalent to px-5
  },
});

export default ComingSoonScreen;
