import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

const Profilecard = () => {
  return (
    <View style={styles.container}>
      {/* LOGO SECTION */}
      <View style={styles.logoSection}>
        <View style={styles.row}>
          {/* EURO LOGO */}
          <View style={styles.iconContainer}>
            <FontAwesome name="first-order" size={40} color="white" />
          </View>
          {/* MONEY LOGO */}
          <View style={styles.iconContainer}>
            <FontAwesome name="money" size={40} color="white" />
          </View>
          {/* MAP LOGO */}
          <View style={styles.iconContainer}>
            <FontAwesome name="map-marker" size={40} color="white" />
          </View>
        </View>
      </View>

      {/* TEXT SECTION */}
      <View style={styles.textSection}>
        <View style={styles.row}>
          {/* Order */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>Order</Text>
          </View>
          {/* Token */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>Token</Text>
          </View>
          {/* Map */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>Map</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profilecard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8, // px-2
  },
  logoSection: {
    backgroundColor: 'black',
    marginTop: 8, // mt-2
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    backgroundColor: '#334155', // bg-slate-700
    borderRadius: 9999, // rounded-full
    height: 96, // h-24
    width: 96, // w-24
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSection: {
    marginTop: 8,
  },
  textContainer: {
    backgroundColor: 'black',
    width: 96, // w-24
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginTop: 4, // mt-1
  },
});
