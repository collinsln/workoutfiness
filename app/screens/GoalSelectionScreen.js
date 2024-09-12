import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import SpinningAsterisk from './SpinningAsterisk'; 

// Define a more comprehensive list of goals with correct image paths
const goals = [
  { id: '1', name: 'Weight Loss', image: require('../assets/weightLoss.png') },
  { id: '2', name: 'Muscle Gain', image: require('../assets/weightLoss.png') }, 
  { id: '3', name: 'Endurance', image: require('../assets/weightLoss.png') },
  { id: '4', name: 'Flexibility', image: require('../assets/weightLoss.png') },
  { id: '5', name: 'Strength Training', image: require('../assets/weightLoss.png') },
  { id: '6', name: 'Overall Fitness', image: require('../assets/weightLoss.png') },
  { id: '7', name: 'Body Toning', image: require('../assets/weightLoss.png') },
  { id: '8', name: 'Cardio Fitness', image: require('../assets/weightLoss.png') },
];

function GoalSelectionScreen({ navigation }) {
  const handleGoalSelect = (goal) => {
    navigation.navigate('WorkoutListScreen', { goal: goal.name });
  };

  return (
    <View style={styles.container}>
      <SpinningAsterisk /> 
      <Text style={styles.header}>Select Your Goal</Text>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handleGoalSelect(item)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.goalName}>{item.name}</Text>
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
    backgroundColor: '#eaf0f6',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333333',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  goalName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333333',
  },
});

export default GoalSelectionScreen;
