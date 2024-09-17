import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, Alert } from 'react-native';
import Slider from '@react-native-community/slider'; // Updated import for Slider
import { Video } from 'expo-av'; // Import Video from expo-av
import { useGender } from '../context/Gender_Context'; // Import the context hook
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const AgeSlider = ({ age, onAgeChange }) => {
    const { gender } = useGender(); // Get the selected gender from context
    const navigation = useNavigation(); // Initialize navigation

    const getAnimationSource = () => {
        if (gender === 'Male') {
            return require('../assets/animation/man/man_rotate.mp4'); // Video source for male
        } else if (gender === 'Female') {
            return require('../assets/animation/lady/lady_rotate.mp4'); // Video source for female
        }
        return null;
    };

    const handleProceed = () => {
        if (age < 1 || age > 100) { // Check if age is valid
            Alert.alert('Invalid Age', 'Please select a valid age between 10 and 100.');
            return;
        }
        navigation.navigate('GoalSelectionScreen', { age });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.animationContainer}>
                {getAnimationSource() && (
                    <Video
                        source={getAnimationSource()}
                        style={styles.animation}
                        shouldPlay
                        resizeMode="contain"
                        isLooping
                    />
                )}
            </View>
            <View style={styles.sliderContainer}>
                <Text style={styles.label}>Select Your Age</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    value={age}
                    onValueChange={onAgeChange}
                    thumbTintColor="#FFF" 
                    minimumTrackTintColor="#2c3e50" // Dark blue-gray for the active track
                    maximumTrackTintColor="#999" // Light gray for the inactive track
                />
                <Text style={styles.ageText}>Age: {age}</Text>
            </View>
            <TouchableOpacity 
                style={styles.submitButton}
                onPress={handleProceed}
            >
                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

// Styles for the AgeSlider component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', // Push the submit button to the bottom
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 30 : 20, // Adjust for iOS status bar
        backgroundColor: '#000', // Ensure background is consistent
    },
    animationContainer: {
        position: 'absolute',
        top: 100, 
        width: '100%',
        alignItems: 'center',
        paddingTop: Platform.OS === 'ios' ? 10 : 0, 
    },
    animation: {
        width: 300, // Increased width
        height: 300, // Increased height
    },
    sliderContainer: {
        flex: 1,
        justifyContent: 'center', 
        width: '100%',
        alignItems: 'center',
        marginTop: 150, 
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#FFF', 
    },
    slider: {
        width: '80%',
        height: 40,
    },
    ageText: {
        fontSize: 20,
        marginTop: 10,
        color: '#FFF', 
        fontWeight: 'bold',
    },
    submitButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#2c3e50', // Dark blue-gray background
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 8,
        position: 'absolute',
        bottom: 0,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default AgeSlider;
