import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MusicProvider } from '../context/MusicContext';
import { GenderProvider } from '../context/Gender_Context';
import SplashScreen from '../SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import GoalSelectionScreen from '../screens/GoalSelectionScreen';
import SettingsScreen from '../screens/SettingsScreen';
import WorkoutListScreen from '../screens/WorkoutListScreen';
import WorkoutDetailScreen from '../screens/WorkoutDetailScreen';
import BackgroundMusic from '../screens/BackgroundMusic';
import Notification from '../screens/Notification';
import RoutineCreator from '../screens/RoutineCreator';

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
          <Notification />
          <Stack.Navigator
            initialRouteName="WelcomeScreen"
            screenOptions={({ navigation }) => ({
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                  <Icon name="cog" size={24} color="#fff" style={{ marginRight: 15 }} />
                </TouchableOpacity>
              ),
              headerStyle: {
                backgroundColor: '#2c3e50', // Example background color
              },
              headerTintColor: '#fff', // Example text color for headers
            })}
          >
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ title: 'Welcome' }}
            />
            <Stack.Screen
              name="GoalSelectionScreen"
              component={GoalSelectionScreen}
              options={{ title: 'Select Goal' }}
            />
            <Stack.Screen
              name="WorkoutListScreen"
              component={WorkoutListScreen}
              options={{ title: 'Workouts' }}
            />
            <Stack.Screen
              name="WorkoutDetailScreen"
              component={WorkoutDetailScreen}
              options={{ title: 'Workout Details' }}
            />
            <Stack.Screen
              name="RoutineCreator"
              component={RoutineCreator}
              options={{ title: 'Create Routine' }}
            />
            <Stack.Screen
              name="SettingsScreen"
              component={SettingsScreen}
              options={{ title: 'Settings' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GenderProvider>
    </MusicProvider>
  );
}

export default AppNavigator;
