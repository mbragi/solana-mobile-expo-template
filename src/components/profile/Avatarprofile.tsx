import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

const Avatarprofile = () => {
  return (
    // PROFILE AVATAR
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('@assets/svg/profileAvatar.png')}
      />
    </View>
  );
};

export default Avatarprofile;

const styles = StyleSheet.create({
  container: {
    height: 128, // h-32 in Tailwind (32 * 4)
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 112, // w-28 in Tailwind (28 * 4)
    height: 112, // h-28 in Tailwind (28 * 4)
  },
});
