import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity, Dimensions } from 'react-native';
import WorkoutImage from './WorkoutImage';
import SpinningAsterisk from './SpinningAsterisk'; // Import the SpinningAsterisk component

const WorkoutDetailScreen = ({ route }) => {
  const { imageId, workoutName, description, youtubeLink } = route.params || {};

  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;

  if (!imageId) {
    return (
      <View style={styles.container}>
        <SpinningAsterisk /> 
        <Text>No workout selected</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <SpinningAsterisk /> 
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{workoutName || 'Workout Details'}</Text>
      </View>

      <View style={[styles.imageContainer, isLandscape && styles.imageContainerLandscape]}>
        <WorkoutImage imageId={imageId} style={styles.image} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.description}>{description || 'No description available.'}</Text>
      </View>

      {youtubeLink && (
        <TouchableOpacity onPress={() => Linking.openURL(youtubeLink)} style={styles.youtubeLinkContainer}>
          <Text style={styles.youtubeLinkText}>Watch on YouTube</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
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
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
    width: '100%',
  },
  imageContainerLandscape: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
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
    color: '#555',
  },
  youtubeLinkContainer: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  youtubeLinkText: {
    color: '#fff',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default WorkoutDetailScreen;
