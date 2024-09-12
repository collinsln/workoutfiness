// SpinningAsterisk.js
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';

const SpinningAsterisk = () => {
    const rotation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotation, {
                toValue: 1,
                duration: 10000, // Duration of one full rotation
                useNativeDriver: true,
            })
        ).start();
    }, [rotation]);

    const rotate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    return (
        <Animated.View style={[styles.container, { transform: [{ rotate }] }]}>
            <Image source={require('../assets/Asterisk96.png')} style={styles.image} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 10, // Adjust as needed
        left: 10, // Adjust as needed
        width: 50, // Adjust as needed
        height: 50, // Adjust as needed
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 50, // Adjust as needed
        height: 50, // Adjust as needed
    },
});

export default SpinningAsterisk;
