import React, { useState } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GenderSelection from './GenderSelection';
import AgeSlider from './AgeSlider';

function WelcomeScreen() {
    const navigation = useNavigation();
    const [selectedGender, setSelectedGender] = useState(null);
    const [age, setAge] = useState(0);  
    const [ageValid, setAgeValid] = useState(false);

    // Handles gender selection
    const handleSelectGender = (gender) => {
        setSelectedGender(gender);
    };

    // Navigates to GoalSelectionScreen if age is valid
    const handleGoalSelection = () => {
        if (ageValid) {
            navigation.navigate('GoalSelectionScreen', { selectedGender, age });
        } else {
            alert('Please select a valid age above 10');
        }
    };

    // Validates the age and sets the ageValid state
    const submitAge = () => {
        if (age >= 10) {
            setAgeValid(true); 
        } else {
            alert('Please select a valid age above 10');
            setAgeValid(false); // Ensure ageValid is false if age is invalid
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                {!selectedGender ? (
                    <GenderSelection onSelectGender={handleSelectGender} />
                ) : (
                    <View style={styles.mainContent}>
                        <AgeSlider age={age} onAgeChange={setAge} />
                        <TouchableOpacity 
                            style={styles.submitButton}
                            onPress={submitAge}
                        >
                            <Text style={styles.buttonText}>Continue</Text>
                        </TouchableOpacity>

                        {ageValid && (
                            <TouchableOpacity 
                                style={styles.workoutButton}
                                onPress={handleGoalSelection}
                            >
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000', // Black background color
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '85%',
        paddingHorizontal: 20,
    },
    mainContent: {
        alignItems: 'center',
        width: '100%',
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
    },
    workoutButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFF', // White background color
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 10,
    },
    buttonText: {
        color: '#000', // Black text color for better contrast on white background
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default WelcomeScreen;
