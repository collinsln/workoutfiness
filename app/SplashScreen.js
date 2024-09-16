import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./assets/animation/splash.json')} // Correct path to your Lottie animation JSON file
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
