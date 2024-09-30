import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const Flippedcard = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.card}>
        {/* TEXT SECTION */}
        <View>
          <Text style={styles.text}>Total Point: 658</Text>
        </View>
        {/* ICON DIRECTION SECTION */}
        <Text style={styles.text}>🎉 My Rank: 52</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Flippedcard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    transform: [{ rotate: '-12deg' }], // -rotate-12 in Tailwind
    height: 64, // h-16 in Tailwind (16 * 4)
    width: 320, // w-80 in Tailwind (80 * 4)
    backgroundColor: '#1e293b', // bg-slate-900 in Tailwind
    borderRadius: 16, // rounded-2xl in Tailwind
    padding: 16, // p-4 in Tailwind
    marginTop: 80, // mt-20 in Tailwind (20 * 4)
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14, // text-sm in Tailwind
  },
});
