



// Define the video sources for each workout type


// screens/WorkoutDetailScreen.js
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Linking, Alert } from 'react-native';
import { Video } from 'expo-av'; // Import Video component from expo-av
import { MaterialIcons } from '@expo/vector-icons'; // For Play/Pause button icons
import workoutDetails from './Const_WorkoutDetail';
import videoSources from './Const_Exercise';

const WorkoutDetailScreen = ({ route, navigation }) => {  // Use navigation prop
  const { workoutName } = route.params || {};
  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;

  const [isPlaying, setIsPlaying] = useState(true);
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

  // Navigate to RoutineCreator page
  const openRoutineCreator = () => {
    navigation.navigate('RoutineCreator');
  };

  return (
    <View style={styles.container}>
      {/* Interactive Routine Creator Button */}
      <View style={styles.interactiveContainer}>
        <TouchableOpacity onPress={openRoutineCreator} style={styles.iconButton}>
          <MaterialIcons name="add" size={30} color="black" />
          <Text style={styles.iconButtonText}>Create a Routine</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>{workoutName || 'Workout Details'}</Text>
      </View>

      <View style={[styles.mediaContainer, isLandscape && styles.mediaContainerLandscape]}>
        <Video
          ref={videoRef}
          source={videoSource}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay={isPlaying}
          isLooping
          useNativeControls={false}
          style={styles.video}
          onError={(error) => {
            console.error('Video Error:', error);
            Alert.alert('Error', 'An error occurred while loading the video.');
          }}
        />

        <TouchableOpacity
          onPress={handlePlayPause}
          style={styles.playPauseButton}
          accessibilityLabel={isPlaying ? 'Pause video' : 'Play video'}
        >
          <MaterialIcons
            name={isPlaying ? 'pause' : 'play-arrow'}
            size={35}
            color="white"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.description}>
          {renderDescriptionWithLink(details.description)}
        </Text>
      </View>

      <View style={styles.adviceContainer}>
        <Text style={styles.adviceHeader}>Expert Advice</Text>
        <Text style={styles.adviceText}>{details.expertAdvice || 'No advice available.'}</Text>
      </View>

      <View style={styles.dosDontsContainer}>
        <Text style={styles.dosDontsHeader}>Dos</Text>
        {details.dos && details.dos.map((item, index) => (
          <Text key={index} style={styles.dosDontsItem}>{`- ${item}`}</Text>
        ))}

        <Text style={styles.dosDontsHeader}>Don’ts</Text>
        {details.donts && details.donts.map((item, index) => (
          <Text key={index} style={styles.dosDontsItem}>{`- ${item}`}</Text>
        ))}
      </View>

      <View style={styles.repsContainer}>
        <Text style={styles.repsHeader}>Reps</Text>
        {details.reps && (
          <>
            <Text style={styles.repsItem}>{`Beginner: ${details.reps.beginner}`}</Text>
            <Text style={styles.repsItem}>{`Intermediate: ${details.reps.intermediate}`}</Text>
            <Text style={styles.repsItem}>{`Advanced: ${details.reps.advanced}`}</Text>
          </>
        )}
      </View>

      {details.youtubeLink && (
        <View style={styles.youtubeLinkContainer}>
          <TouchableOpacity onPress={() => Linking.openURL(details.youtubeLink)}>
            <Text style={styles.youtubeLinkText}>Watch on YouTube</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2c3e50',
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'White',
  },
  mediaContainer: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: 'white', 
  },
  mediaContainerLandscape: {
    height: '50%',
  },
  video: {
    width: '100%',
    height: 200,
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: 100 }, { translateY: -17 }],
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 30,
    padding: 20,
    zIndex: 1,
  },
  interactiveContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 2,
    alignItems: 'center',
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    elevation: 2,
  },
  iconButtonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'white',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  adviceContainer: {
    marginBottom: 20,
  },
  adviceHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  adviceText: {
    fontSize: 16,
    color: '#666',
    color: 'white',
  },
  dosDontsContainer: {
    marginBottom: 20,
    
  },
  dosDontsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  dosDontsItem: {
    fontSize: 16,
    color: 'white',
  },
  repsContainer: {
    marginBottom: 20,
    color: 'white',
  },
  repsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  repsItem: {
    fontSize: 16,
    color: '#666',
    color: 'white',
  },
  youtubeLinkContainer: {
    marginTop: 20,
  },
  youtubeLinkText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default WorkoutDetailScreen;



