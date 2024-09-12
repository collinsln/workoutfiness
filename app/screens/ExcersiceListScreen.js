// ExerciseListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const exercises = [
  { id: '1', name: 'Push-Up', category: 'Strength' },
  { id: '2', name: 'Squat', category: 'Strength' },
  // Add more exercises here
];

function ExerciseListScreen() {
  const navigation = useNavigation();

  const handlePress = (exerciseId) => {
    navigation.navigate('ExerciseDetails', { id: exerciseId });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)} style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});

export default ExerciseListScreen;
