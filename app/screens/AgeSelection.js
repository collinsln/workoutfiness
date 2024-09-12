import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const AgeSelection = ({ onSelectAge }) => {
    const handleAgeSelect = (age) => {
        onSelectAge(age);
    };

    return (
        <View style={styles.container}>
            <Button title="18-25" onPress={() => handleAgeSelect('18-25')} />
            <Button title="26-35" onPress={() => handleAgeSelect('26-35')} />
            <Button title="36-45" onPress={() => handleAgeSelect('36-45')} />
            <Button title="46+" onPress={() => handleAgeSelect('46+')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
    },
});

export default AgeSelection;
