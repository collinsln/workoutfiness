import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import { useGender } from '../context/Gender_Context';
import { useRoute, useNavigation } from '@react-navigation/native';
import exercises from '../assets/exercises.json';

function WorkoutListScreen() {
  const { gender } = useGender();
  const route = useRoute();
  const navigation = useNavigation();
  const { goal: workoutType } = route.params || {};  // Extract goal from route params

  // Logging context and route params
  console.log('Selected gender from context:', gender);
  console.log('Route params:', route.params);

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

  // Logging additional details
  console.log('Selected gender:', gender);
  console.log('Workout type (goal):', workoutType);

  if (!gender || !workoutType) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>No gender or workout type selected</Text>
      </View>
    );
  }

  // Ensure exercises.workouts is defined and an array
  if (!Array.isArray(exercises.workouts)) {
    console.error('Exercises data is not an array or is undefined:', exercises.workouts);
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Failed to load workouts data.</Text>
      </View>
    );
  }

  // Filter workouts based on gender and goal
  const filteredWorkouts = exercises.workouts.filter(
    (workout) =>
      (workout.gender === gender || workout.gender === 'any') &&
      workout.goal === workoutType
  );

  console.log('Filtered workouts:', filteredWorkouts);

  const handleWorkoutPress = (workout) => {
    // Ensure workout object has necessary properties
    if (workout && workout.workoutName && workout.description) {
      navigation.navigate('WorkoutDetailScreen', {
        workoutName: workout.workoutName,
        workoutDescription: workout.description,
        workoutReps: workout.reps ? workout.reps[difficulty.toLowerCase()] : 'N/A',
      });
    } else {
      console.error('Invalid workout data:', workout);
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
      {/* Display difficulty picker (optional) */}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ecf0f1',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    color: '#ecf0f1',
    backgroundColor: '#34495e',
  },
  card: {
    backgroundColor: '#34495e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ecf0f1',
  },
  workoutDescription: {
    fontSize: 14,
    color: '#bdc3c7',
    marginTop: 5,
  },
  workoutReps: {
    fontSize: 14,
    color: '#ecf0f1',
    marginTop: 5,
  },
  expertAdvice: {
    fontSize: 14,
    color: '#bdc3c7',
    marginTop: 5,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#bdc3c7',
  },
});

export default WorkoutListScreen;
