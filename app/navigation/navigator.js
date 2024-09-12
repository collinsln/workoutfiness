import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import GoalSelectionScreen from '../screens/GoalSelectionScreen';
import WorkoutListScreen from '../screens/WorkoutListScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen'; // Import the new screen
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome home">
        <Stack.Screen name="Welcome home" component={WelcomeScreen} />
        <Stack.Screen name="GoalSelectionScreen" component={GoalSelectionScreen} />
        <Stack.Screen name="WorkoutListScreen" component={WorkoutListScreen} />
        <Stack.Screen name="WorkoutDetailScreen" component={WorkoutDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
