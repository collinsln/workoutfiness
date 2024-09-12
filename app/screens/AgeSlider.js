import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

const AgeSlider = ({ age, onAgeChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Select Your Age</Text>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={100}
                step={1}
                value={age}
                onValueChange={onAgeChange}
                minimumTrackTintColor="#1fb28f"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#1f1f1f"
                onSlidingComplete={() => {}} // Add this if you want to handle end of sliding
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
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    slider: {
        width: '100%',
        height: 40,
    },
    ageText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 10,
    },
});

export default AgeSlider;
