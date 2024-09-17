// src/screens/GenderSelection.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useGender } from '../context/Gender_Context'; // Import the context hook

const GenderSelection = ({ onSelectGender }) => {
    const [selectedGender, setSelectedGender] = useState(null);
    const { setGender } = useGender(); // Get the setGender function from context

    const handleSelect = (gender) => {
        setSelectedGender(gender);
        setGender(gender); // Update context with selected gender
        console.log('Gender selected:', gender); // Log selected gender
        onSelectGender(gender);
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContent}>

                <Text style={styles.welcomeText}>
                    We're excited to have you here! To get started, please select your gender. This will help us tailor the experience to your preferences.
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedGender === 'Male' && styles.selectedButton
                        ]}
                        onPress={() => handleSelect('Male')}
                    >
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../assets/animation/man/male.png')} 
                                style={styles.image}
                            />
                        </View>
                        <Text style={styles.buttonText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.button,
                            selectedGender === 'Female' && styles.selectedButton
                        ]}
                        onPress={() => handleSelect('Female')}
                    >
                        <View style={styles.imageWrapper}>
                            <Image
                                source={require('../assets/animation/lady/female.png')} 
                                style={styles.image}
                            />
                        </View>
                        <Text style={styles.buttonText}>Female</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    mainContent: {
        width: '90%',
        alignItems:'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 24,
        fontFamily: 'Roboto',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        flexWrap: 'wrap',
    },
    button: {
        flex: 1,
        height: height * 0.3,
        margin: 10,
        backgroundColor: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        position: 'relative',
        overflow: 'hidden',
    },
    selectedButton: {
        backgroundColor: '#007BFF',
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'Roboto-Bold',
        position: 'absolute',
        bottom: 10,
    },
    imageWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain' ,
    },
});

export default GenderSelection;
