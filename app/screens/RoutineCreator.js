import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { format } from 'date-fns';
import * as Notifications from 'expo-notifications';

// Configure locale for calendar
LocaleConfig.locales['en'] = {
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};
LocaleConfig.defaultLocale = 'en';

const exercises = [
  'Push-ups',
  'Squats',
  'Lunges',
  'Plank',
  'Burpees',
  'Sit-ups'
];

const RoutineScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00'); // Default time
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]); // Default exercise
  const [reps, setReps] = useState('10'); // Default reps
  const [showCalendar, setShowCalendar] = useState(false);

  const scheduleNotification = async () => {
    if (!selectedDate) {
      Alert.alert('Error', 'Please select a date.');
      return;
    }

    if (!selectedTime) {
      Alert.alert('Error', 'Please select a time.');
      return;
    }

    const [hours, minutes] = selectedTime.split(':').map(Number);
    const notificationDate = new Date(selectedDate);
    notificationDate.setHours(hours, minutes);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Routine Reminder",
        body: `It's time for your ${selectedExercise} routine with ${reps} reps!`,
      },
      trigger: {
        date: notificationDate,
        repeats: false, // Set to true if you want the notification to repeat
      },
    });

    Alert.alert('Notification Scheduled', `Routine will be reminded at ${format(notificationDate, 'PPpp')}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create or Edit Routine</Text>

      {/* Calendar */}
      <TouchableOpacity onPress={() => setShowCalendar(true)} style={styles.input}>
        <Text style={styles.inputText}>{selectedDate ? format(new Date(selectedDate), 'MMMM dd, yyyy') : 'Select Date'}</Text>
      </TouchableOpacity>

      {/* Time Picker */}
      <TextInput
        style={styles.input}
        placeholder="Enter Time (HH:MM)"
        placeholderTextColor="#B0B0B0"
        value={selectedTime}
        onChangeText={setSelectedTime}
        keyboardType="numeric"
      />

      {/* Exercise Picker */}
      <View style={styles.input}>
        <Text style={styles.inputText}>Select Exercise</Text>
        <Picker
          selectedValue={selectedExercise}
          onValueChange={(itemValue) => setSelectedExercise(itemValue)}
          style={styles.picker}
        >
          {exercises.map((exercise) => (
            <Picker.Item key={exercise} label={exercise} value={exercise} />
          ))}
        </Picker>
      </View>

      {/* Reps Input */}
      <TextInput
        style={styles.input}
        placeholder="Number of Reps"
        placeholderTextColor="#B0B0B0"
        value={reps}
        keyboardType="numeric"
        onChangeText={setReps}
      />

      {/* Save Button */}
      <TouchableOpacity onPress={scheduleNotification} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Routine</Text>
      </TouchableOpacity>

      {/* Calendar Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={showCalendar}
        onRequestClose={() => setShowCalendar(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Calendar
              onDayPress={(day) => {
                setSelectedDate(day.dateString);
                setShowCalendar(false);
              }}
              markedDates={{ [selectedDate]: { selected: true, selectedColor: '#007BFF' } }}
            />
            <TouchableOpacity onPress={() => setShowCalendar(false)} style={styles.doneButton}>
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#1E1E1E',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#2c3e50',
  },
  inputText: {
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#2C2C2C',
    borderRadius: 10,
    alignItems: 'center',
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  picker: {
    color: '#FFFFFF',
  },
});

export default RoutineScreen;
