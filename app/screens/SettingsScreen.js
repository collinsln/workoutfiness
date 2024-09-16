// src/screens/SettingsScreen.js
import React, { useContext } from 'react';
import { View, Text, Switch, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MusicContext } from '../context/MusicContext';

const SettingsScreen = () => {
  const { isMuted, setIsMuted } = useContext(MusicContext);
  const [gender, setGender] = React.useState('Not Specified');
  const [beginnerCountdown, setBeginnerCountdown] = React.useState(20);
  const [intermediateCountdown, setIntermediateCountdown] = React.useState(30);
  const [advancedCountdown, setAdvancedCountdown] = React.useState(40);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Mute Background Music:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isMuted ? "#f5dd4b" : "#f4f3f4"}
          value={isMuted}
          onValueChange={(value) => setIsMuted(value)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Gender:</Text>
        <TextInput
          style={styles.input}
          value={gender}
          onChangeText={(text) => setGender(text)}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Beginner Countdown (seconds):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={beginnerCountdown.toString()}
          onChangeText={(text) => setBeginnerCountdown(parseInt(text, 10))}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Intermediate Countdown (seconds):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={intermediateCountdown.toString()}
          onChangeText={(text) => setIntermediateCountdown(parseInt(text, 10))}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Advanced Countdown (seconds):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={advancedCountdown.toString()}
          onChangeText={(text) => setAdvancedCountdown(parseInt(text, 10))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {/* Save settings logic here */}}>
        <Text style={styles.buttonText}>Save Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#1E1E1E', // Dark background for a modern look
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // White text for contrast
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    color: '#fff', // White text for contrast
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#444', // Slightly darker border for visibility
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#333', // Dark input background
    color: '#fff', // White text for contrast
  },
  button: {
    backgroundColor: '#6200EE', // Primary color
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff', // White text for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
