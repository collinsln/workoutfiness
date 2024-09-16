// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { MusicProvider } from '../context/MusicContext';
import { GenderProvider } from '../context/Gender_Context'; // Corrected import path
import SplashScreen from '../SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GoalSelectionScreen from '../screens/GoalSelectionScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WorkoutListScreen from '../screens/WorkoutListScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';
import BackgroundMusic from '../screens/BackgroundMusic';

const Stack = createStackNavigator();

function AppNavigator() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <MusicProvider>
      <GenderProvider>
        <NavigationContainer>
          <BackgroundMusic />
          <Stack.Navigator initialRouteName="WelcomeScreen">
            <Stack.Screen name="Let's get started!" component={WelcomeScreen} />
            <Stack.Screen name="GoalSelectionScreen" component={GoalSelectionScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="WorkoutListScreen" component={WorkoutListScreen} />
            <Stack.Screen 
              name="WorkoutDetailScreen" 
              component={WorkoutDetailScreen} 
              options={{ title: 'Workout Details' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GenderProvider>
    </MusicProvider>
  );
}

export default AppNavigator;
