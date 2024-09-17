import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import SpinningAsterisk from './SpinningAsterisk';
import BackgroundMusic from './BackgroundMusic';  // Import the BackgroundMusic component

const goals = [
  { id: '1', name: 'Weight Loss', image: require('../assets/Goal_Icon2.png') },
  { id: '2', name: 'Muscle Gain', image: require('../assets/Goal_Icon2.png') },
  { id: '6', name: 'Overall Fitness', image: require('../assets/Goal_Icon2.png') },
//   { id: '3', name: 'Endurance', image: require('../assets/weightLoss.png') },
//   { id: '4', name: 'Flexibility', image: require('../assets/weightLoss.png') },
//   { id: '5', name: 'Strength Training', image: require('../assets/weightLoss.png') }, 
//   { id: '7', name: 'Body Toning', image: require('../assets/weightLoss.png') },
//   { id: '8', name: 'Cardio Fitness', image: require('../assets/weightLoss.png') },
];

function GoalSelectionScreen({ navigation }) {
  console.log('Navigation prop:', navigation);

  const handleGoalSelect = (goal) => {
    navigation.navigate('WorkoutListScreen', { goal: goal.name });
  };


  return (
    <View style={styles.container}>
      

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
    backgroundColor: '#000', // Dark background color
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', // Light text color
  },
  
  card: {
    backgroundColor: '#2c3e50', 
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 30,
    marginRight: 25,
    backgroundColor: '#2c3e50', // Dark background for images
  },
  goalName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff', // Light text color
  },
});

export default GoalSelectionScreen;
