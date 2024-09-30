import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const OrderTracks = () => {
  return (
    // MAIN CONTAINER
    <View style={styles.mainContainer}>
      {/* SUB CONTAINER */}
      <View style={styles.subContainer}>
        {/* TEXT SECTION */}
        <Text style={styles.text}>😟 Cancel, I will do it Later</Text>
      </View>
    </View>
  );
};

export default OrderTracks;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 96, // h-24 in Tailwind
    backgroundColor: 'black',
    marginTop: 80, // mt-20 in Tailwind
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    width: 320, // w-80 in Tailwind
    height: 80, // h-20 in Tailwind
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 16, // rounded-2xl in Tailwind
    borderWidth: 2,
    borderColor: 'white',
  },
  text: {
    padding: 16, // p-4 in Tailwind
    color: 'white',
    fontSize: 18, // text-lg in Tailwind
    fontWeight: '600', // font-semibold in Tailwind
    textAlign: 'center',
  },
});
