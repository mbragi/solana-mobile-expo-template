import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const Logingout = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        {/* TEXT SECTION */}
        <View>
          <Text style={styles.text}>Log Out OF Account</Text>
        </View>
        {/* ICON DIRECTION SECTION */}
        <FontAwesome name="arrow-circle-o-right" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Logingout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 64, // h-16 in Tailwind (16 * 4)
    width: 320, // w-80 in Tailwind (80 * 4)
    backgroundColor: '#60a5fa', // bg-blue-400 in Tailwind
    borderRadius: 16, // rounded-2xl in Tailwind
    padding: 16, // p-4 in Tailwind
    marginTop: 24, // mt-6 in Tailwind (6 * 4)
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14, // text-sm in Tailwind
  },
});
