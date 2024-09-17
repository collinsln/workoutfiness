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

    const handleSelectGender = (gender) => {
        setSelectedGender(gender);
    };

    const handleGoalSelection = () => {
        if (ageValid) {
            navigation.navigate('GoalSelectionScreen', { selectedGender, age });
        } else {
            alert('Please select a valid age above 10');
        }
    };

    const submitAge = () => {
        if (age >= 10) {
            setAgeValid(true); 
        } else {
            alert('Please select a valid age above 10');
            setAgeValid(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contentContainer}>
                {!selectedGender ? (
                    <GenderSelection onSelectGender={handleSelectGender} />
                ) : (
                    <View style={styles.mainContent}>
                        <AgeSlider 
                            age={age} 
                            onAgeChange={setAge} 
                            onProceed={handleGoalSelection} 
                        />
                        
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    mainContent: {
        flex: 1,
        width: '100%',
    },
    submitButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#2c3e50',
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
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        // fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});

export default WelcomeScreen;
