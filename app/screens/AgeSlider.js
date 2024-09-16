import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { Animated } from 'react-native';

const AgeSlider = ({ age, onAgeChange }) => {
    const thumbAnimation = new Animated.Value(0);

    const handleSlidingStart = () => {
        Animated.spring(thumbAnimation, {
            toValue: 1,
            friction: 4,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    const handleSlidingComplete = () => {
        Animated.spring(thumbAnimation, {
            toValue: 0,
            friction: 4,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    const thumbStyle = {
        transform: [
            {
                scale: thumbAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 1.2],
                }),
            },
        ],
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}> Kindly Select Your Age</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={age}
                onValueChange={onAgeChange}
                onSlidingStart={handleSlidingStart}
                onSlidingComplete={handleSlidingComplete}
                minimumTrackTintColor="#2c3e50" // Dark blue-gray for minimum track
                maximumTrackTintColor="#d3d3d3" // Light gray for maximum track
                thumbTintColor="#2c3e50" // Dark blue-gray for thumb
                thumbStyle={thumbStyle}
            />
            <Text style={styles.ageText}>Age: {Math.round(age)}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
    },
    label: {
        color: '#fff', // White text color for the label
        fontSize: 18,
        marginBottom: 10,
    },
    slider: {
        width: '100%',
        height: 60, // Thicker slider track
    },
    ageText: {
        color: 'tomato', // White text color for the age text
        fontSize: 18,
        marginTop: 10,
    },
});

export default AgeSlider;
