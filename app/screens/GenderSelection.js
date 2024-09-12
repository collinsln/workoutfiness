import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenderSelection = ({ onSelectGender }) => {
    const [selectedGender, setSelectedGender] = useState(null);

    const handleSelect = (gender) => {
        setSelectedGender(gender);
        onSelectGender(gender);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Your Gender</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedGender === 'Male' && styles.selectedButton
                    ]}
                    onPress={() => handleSelect('Male')}
                >
                    <Text style={styles.buttonText}>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedGender === 'Female' && styles.selectedButton
                    ]}
                    onPress={() => handleSelect('Female')}
                >
                    <Text style={styles.buttonText}>Female</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedGender === 'Other' && styles.selectedButton
                    ]}
                    onPress={() => handleSelect('Other')}
                >
                    <Text style={styles.buttonText}>Other</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button: {
        flex: 1,
        height: 50,
        margin: 10,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    selectedButton: {
        backgroundColor: '#007BFF',
    },
    buttonText: {
        fontSize: 18,
        color: '#333',
    },
});

export default GenderSelection;
