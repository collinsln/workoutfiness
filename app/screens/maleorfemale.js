import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av'; // Import Video component from expo-av
import { useNavigation } from '@react-navigation/native'; // Import useNavigation for navigation

const LoopingVideoScreen = ({ route }) => {
  // Safely access route.params
  const { workoutName, description } = route.params || { workoutName: 'Default Workout', description: 'Default Description' };

  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;

  const navigation = useNavigation(); // Use navigation hook to navigate

  // Path to your animation video (lady_rotate.mp4)
  const videoSource = require('../assets/animation/lady_rotate.mp4');

  // Handle navigation to GoalSelectionScreen with gender parameter
  const handleNavigateToGoalSelection = (gender) => {
    navigation.navigate('GoalSelectionScreen', { selectedGender: gender });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{workoutName}</Text>
      </View>

      {/* First Video with Gender Labels */}
      <View style={[styles.mediaContainer, isLandscape && styles.mediaContainerLandscape]}>
        <Video
          source={videoSource} // Load video source from assets
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay // Start playing automatically
          isLooping // Set video to loop
          useNativeControls={false} // Disable default controls
          style={styles.video} // Apply styles to video
        />
        <TouchableOpacity style={styles.genderButton} onPress={() => handleNavigateToGoalSelection('Female')}>
          <Text style={styles.genderLabel}>Female</Text>
        </TouchableOpacity>
      </View>

      {/* Second Video with Gender Labels */}
      <View style={[styles.mediaContainer, isLandscape && styles.mediaContainerLandscape]}>
        <Video
          source={videoSource} // Load video source from assets
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay // Start playing automatically
          isLooping // Set video to loop
          useNativeControls={false} // Disable default controls
          style={styles.video} // Apply styles to video
        />
        <TouchableOpacity style={styles.genderButton} onPress={() => handleNavigateToGoalSelection('Male')}>
          <Text style={styles.genderLabel}>Male</Text>
        </TouchableOpacity>
      </View>

      {/* Description */}
      <View style={styles.detailsContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Set background color to black
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // White color for header
  },
  mediaContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  mediaContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: 250, // Adjust height to suit your design
  },
  genderButton: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#1e90ff', // Background color for the buttons
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  genderLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White color for labels
  },
  detailsContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000', // Black color for description text
  },
});

export default LoopingVideoScreen;
