import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useGender } from '../context/Gender_Context';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Import Icon component for settings button
import exercises from '../assets/exercises.json';

function WorkoutListScreen() {
  const { gender } = useGender();
  const route = useRoute();
  const navigation = useNavigation();
  const { goal: workoutType } = route.params || {};  // Extract goal from route params

  const [difficulty, setDifficulty] = useState('Beginner');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadWorkouts();
  }, []);

  const loadWorkouts = () => {
    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (e) {
      setLoading(false);
      setError('Failed to load data.');
    }
  };


  if (!gender || !workoutType) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No gender or workout type selected</Text>
      </View>
    );
  }

  if (!Array.isArray(exercises.workouts)) {
    console.error('Exercises data is not an array or is undefined:', exercises.workouts);
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Failed to load workouts data.</Text>
      </View>
    );
  }

  const filteredWorkouts = exercises.workouts.filter(
    (workout) =>
      (workout.gender === gender || workout.gender === 'any') &&
      workout.goal === workoutType
  );

  const handleWorkoutPress = (workout) => {
    if (workout && workout.workoutName && workout.description) {
      navigation.navigate('WorkoutDetailScreen', {
        workoutName: workout.workoutName,
        workoutDescription: workout.description,
        workoutReps: workout.reps ? workout.reps[difficulty.toLowerCase()] : 'N/A',
      });
    } else {
      Alert.alert('Error', 'Invalid workout data.');
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ecf0f1" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
     

      <Text style={styles.header}>Workouts for {workoutType}</Text>

      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleWorkoutPress(item)}>
            <Text style={styles.workoutName}>{item.workoutName}</Text>
            <Text style={styles.workoutDescription}>{item.description}</Text>
            <Text style={styles.workoutReps}>Reps: {item.reps ? item.reps[difficulty.toLowerCase()] : 'N/A'}</Text>
            <Text style={styles.expertAdvice}>Expert Advice: {item.expertAdvice}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Add styling for the settings button
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#34495e',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },
  workoutName: {
    fontSize: 18,
    color: '#ecf0f1',
    fontWeight: 'bold',
  },
  workoutDescription: {
    color: '#bdc3c7',
  },
  workoutReps: {
    color: '#ecf0f1',
    marginTop: 10,
  },
  expertAdvice: {
    color: '#f1c40f',
    marginTop: 5,
  },
  message: {
    color: '#ecf0f1',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default WorkoutListScreen;
