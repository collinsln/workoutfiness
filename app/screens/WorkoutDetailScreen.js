import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Linking, Alert } from 'react-native';
import { Video } from 'expo-av'; // Import Video component from expo-av
import { MaterialIcons } from '@expo/vector-icons'; // For Play/Pause button icons

const WorkoutDetailScreen = ({ route }) => {
  const { workoutName, description, youtubeLink, expertAdvice, dos, donts, reps } = route.params || {};
  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;

  // State to track if the video is playing
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null); // Ref to control the video playback

  // Map of video files
  const videoSources = {
    'Jump Squat': require('../assets/animation/man/Man_Jump_Squat.mp4'),
    'Bicycle Crunch': require('../assets/animation/man/Man_Bicycle_Crunch.mp4'),
    'Bicyle Crunches': require('../assets/animation/man/Man_Bicyle_Crunches.mp4'),
    'Calf Raises': require('../assets/animation/man/Man_Calf_Raises.mp4'),
    'Cossack Squat': require('../assets/animation/man/Man_Cossack_Squat.mp4'),
    'Finger Wave': require('../assets/animation/man/Man_Finger_Wave.mp4'),
    'Forward Lunge': require('../assets/animation/man/Man_Forward_Lunge.mp4'),
    'Incline Push_Up': require('../assets/animation/man/Man_Incline_Push_Up.mp4'),
    'Kneeling Diamond_Push_Ups': require('../assets/animation/man/Man_Kneeling_Diamond_Push_Ups.mp4'),
    'Push-Ups': require('../assets/animation/man/Man_Push_Ups.mp4'),
    'Reverse Crunch': require('../assets/animation/man/Man_Reverse_Crunch.mp4'),
    'Rope Assisted Leg Raise': require('../assets/animation/man/Man_Rope_Assisted_Leg_Raise.mp4'),
    'Side Crunch': require('../assets/animation/man/Man_Side_Crunch.mp4'),
    'Single Leg Squat': require('../assets/animation/man/Man_Single_Leg_Squat.mp4'),
    'Single Leg Squat_Reach': require('../assets/animation/man/Man_Single_Leg_Squat_Reach.mp4'),
    'Split Squat': require('../assets/animation/man/Man_Split_Squat.mp4'),
    'Squats': require('../assets/animation/man/Man_Squats.mp4'),
    'Standing Leg Raise': require('../assets/animation/man/Man_Standing_Leg_Raise.mp4'),
    'Standing Trunk Twist': require('../assets/animation/man/Man_Standing_Trunk_Twist.mp4'),
    'Straight Arm Elevated Dip': require('../assets/animation/man/Man_Straight_Arm_Elevated_Dip.mp4'),
    'Tricep Dip': require('../assets/animation/man/Man_Tricep_Dip.mp4'),
    'Wall Pshups': require('../assets/animation/man/Man_Wall_Pshups.mp4'),
    'Forward Lunges': require('../assets/animation/lady/Lady_Forward_Lunges.mp4'),
    'Bent-Knee Sit-Ups': require('../assets/animation/lady/Lady_Bent_Knee_Sit_Ups.mp4'),
    'Bicycle Crunch': require('../assets/animation/lady/Lady_Bicycle_Crunch.mp4'),
    'Calf Raises': require('../assets/animation/lady/Lady_Calf_Raises.mp4'),
    'Chest Lift': require('../assets/animation/lady/Lady_Chest_Lift.mp4'),
    'Cossack Squat': require('../assets/animation/lady/Lady_Cossack_Squat.mp4'),
    'High Knees Exercise': require('../assets/animation/lady/Lady_High_Knees_Exercise.mp4'),
    'Plank': require('../assets/animation/lady/Lady_Plank.mp4'),
    'Push-Ups': require('../assets/animation/lady/Lady_Push_Ups.mp4'),
    'Side plank': require('../assets/animation/lady/Lady_Side_pLank.mp4'),
    'Reverse Crunch': require('../assets/animation/lady/Lady_Reverse_Crunch.mp4'),
    'Push-up on Knees': require('../assets/animation/lady/Lady_Push-up_on_knees.mp4'),
    'Side Leg Lift': require('../assets/animation/lady/Lady_Side_Leg_Lift.mp4'),
    'Side Squat': require('../assets/animation/lady/Lady_Side_Squat.mp4'),
    'Split Squat': require('../assets/animation/lady/Lady_Split_Squat.mp4'),
    'Squat': require('../assets/animation/lady/Lady_Squat.mp4'),
    'Standing Knee Lift': require('../assets/animation/lady/Lady_Standing_Knee_Lift.mp4'),
    'Straight Leg Raise': require('../assets/animation/lady/Lady_Straight_Leg_Raise.mp4'),
    'Toe Walking': require('../assets/animation/lady/Lady_Toe_Walking.mp4'),
    'Twisting Crunch': require('../assets/animation/lady/Lady_Twisting_Crunch.mp4'),
  };


  // Determine the video source based on the workoutName
  const videoSource = videoSources[workoutName] || require('../assets/animation/man/placeholder.mp4');

  // Play/Pause the video
  const handlePlayPause = async () => {
    try {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    } catch (error) {
      console.error('Error in handlePlayPause:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{workoutName || 'Workout Details'}</Text>
      </View>

      {/* Video with Play/Pause Control */}
      <View style={[styles.mediaContainer, isLandscape && styles.mediaContainerLandscape]}>
        <Video
          ref={videoRef} // Reference to control video
          source={videoSource} // Load video source from assets
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="contain"
          shouldPlay={isPlaying} // Control if the video should play
          isLooping // Set video to loop
          useNativeControls={false} // Disable default controls
          style={styles.video} // Apply styles to video
          onError={(error) => {
            console.error('Video Error:', error);
            Alert.alert('Error', 'An error occurred while loading the video.');
          }}
        />

        {/* Play/Pause Button */}
        <TouchableOpacity
          onPress={handlePlayPause}
          style={styles.playPauseButton}
          accessibilityLabel={isPlaying ? 'Pause video' : 'Play video'}
        >
          <MaterialIcons
            name={isPlaying ? 'pause' : 'play-arrow'} // Toggle between play and pause icons
            size={35}
            color="white"
          />
        </TouchableOpacity>
      </View>

      {/* Exercise Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.description}>{description || 'No description available.'}</Text>
      </View>

      {/* Expert Advice */}
      <View style={styles.adviceContainer}>
        <Text style={styles.adviceHeader}>Expert Advice</Text>
        <Text style={styles.adviceText}>{expertAdvice || 'No advice available.'}</Text>
      </View>

      {/* Do's and Don'ts */}
      <View style={styles.dosDontsContainer}>
        <Text style={styles.dosDontsHeader}>Do's</Text>
        <Text style={styles.dosDontsText}>{dos || 'No do\'s available.'}</Text>
        <Text style={styles.dosDontsHeader}>Don'ts</Text>
        <Text style={styles.dosDontsText}>{donts || 'No don\'ts available.'}</Text>
      </View>

      {/* Reps */}
      <View style={styles.repsContainer}>
        <Text style={styles.repsHeader}>Recommended Reps</Text>
        <Text style={styles.repsText}>{reps || 'No rep information available.'}</Text>
      </View>

      {/* YouTube Link */}
      {youtubeLink && (
        <View style={styles.youtubeLinkContainer}>
          <TouchableOpacity onPress={() => Linking.openURL(youtubeLink)}>
            <Text style={styles.youtubeLinkText}>Watch on YouTube</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  headerContainer: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  mediaContainer: {
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    height: 200,
    backgroundColor: 'black',
  },
  mediaContainerLandscape: {
    height: 180,
  },
  video: {
    width: '100%',
    height: '100%',
  },
  playPauseButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -20 }, { translateY: -20 }],
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 30,
    padding: 15,
  },
  detailsContainer: {
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  adviceContainer: {
    marginVertical: 20,
  },
  adviceHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  adviceText: {
    fontSize: 16,
    color: '#666',
  },
  dosDontsContainer: {
    marginVertical: 20,
  },
  dosDontsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dosDontsText: {
    fontSize: 16,
    color: '#666',
  },
  repsContainer: {
    marginVertical: 20,
  },
  repsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  repsText: {
    fontSize: 16,
    color: '#666',
  },
  youtubeLinkContainer: {
    marginVertical: 20,
  },
  youtubeLinkText: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});

export default WorkoutDetailScreen;
