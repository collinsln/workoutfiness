// screens/WorkoutDetailScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Linking, Alert } from 'react-native';
import { Video } from 'expo-av'; // Import Video component from expo-av
import { MaterialIcons } from '@expo/vector-icons'; // For Play/Pause button icons
import RoutineCreator from './RoutineCreator';

// Import workoutDetails and videoSources from their respective files
import workoutDetails from './Const_WorkoutDetail';
import videoSources from './Const_Exercise';

const WorkoutDetailScreen = ({ route }) => {
  const { workoutName } = route.params || {};
  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;

  const [isPlaying, setIsPlaying] = useState(true); 
  const [showRoutineCreator, setShowRoutineCreator] = useState(false);
  const videoRef = useRef(null);

  const videoSource = videoSources[workoutName] || require('../assets/animation/man/placeholder.mp4');

  const handlePlayPause = async () => {
    try {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying); 
    } catch (error) {
      console.error('Error in handlePlayPause:', error);
    }
  };

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };

  const renderDescriptionWithLink = (text) => {
    if (!text) return 'No description available.';

    const urlRegex = /(http[s]?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      return urlRegex.test(part) ? (
        <Text
          key={index}
          style={styles.link}
          onPress={() => handleLinkPress(part)}
        >
          {part}
        </Text>
      ) : (
        <Text key={index}>{part}</Text>
      );
    });
  };

  const details = workoutDetails[workoutName] || {};

  const toggleRoutineCreator = () => {
    setShowRoutineCreator(!showRoutineCreator); // Toggle RoutineCreator visibility
  };

  return (
    <View style={styles.container}>
      {/* Rest of the code remains unchanged */}
    </View>
  );
};

export default WorkoutDetailScreen;
