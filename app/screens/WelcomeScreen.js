import React, { useState } from 'react';
import { ImageBackground, Text, View, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../config/colors';
import BackgroundMusic from './BackgroundMusic';
import GenderSelection from './GenderSelection';
import AgeSlider from './AgeSlider';

function WelcomeScreen() {
    const navigation = useNavigation();
    const [selectedGender, setSelectedGender] = useState(null);
    const [age, setAge] = useState(0);  
    const [ageSelected, setAgeSelected] = useState(false);

    const handleSelectGender = (gender) => {
        setSelectedGender(gender);
        console.log('Selected Gender:', gender);
    };

    const handleGoalSelection = () => {
        if (ageSelected) {
            navigation.navigate('GoalSelectionScreen', { gender: selectedGender, age });
            navigation.reset({
                index: 0,
                routes: [{ name: 'GoalSelectionScreen', params: { gender: selectedGender, age } }],
            });
        }
    };

    const submitAge = () => {
        if (age >= 0) {
            setAgeSelected(true); 
        } else {
            alert('Please select a valid age');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.background}
                source={require("../assets/icon.png")}
            >
                <BackgroundMusic/>

                <View style={styles.contentContainer}>
                    {!selectedGender ? (
                        <>
                            <Text style={styles.titleText}>Select Your Gender</Text>
                            <GenderSelection onSelectGender={handleSelectGender} />
                        </>
                    ) : (
                        <>
                            {!ageSelected ? (
                                <>
                                    <Text style={styles.titleText}>Select Your Age</Text>
                                    <AgeSlider age={age} onAgeChange={setAge} />
                                    <TouchableOpacity 
                                        style={styles.submitButton}
                                        onPress={submitAge}
                                    >
                                        <Text style={styles.buttonText}>Submit Age</Text>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <Text style={styles.titleText}>Commit to Fit, Commit to You.</Text>
                            )}
                            {ageSelected && (
                                <TouchableOpacity 
                                    style={styles.workoutButton}
                                    onPress={handleGoalSelection}
                                >
                                    <Text style={styles.buttonText}>Select Your Goal</Text>
                                </TouchableOpacity>
                            )}
                        </>
                    )}
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        width: '80%',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 15,
        padding: 20,
    },
    titleText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    submitButton: {
        width: '100%',
        height: 60,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    workoutButton: {
        width: '100%',
        height: 60,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default WelcomeScreen;
