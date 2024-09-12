import React, { useState, useEffect } from 'react';
import { Image, View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const WorkoutImage = ({ imageId, style }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`http://192.168.100.72:3000/images/${imageId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const imageURL = response.url;  
        setImageUrl(imageURL);
      } catch (err) {
        console.error('Failed to fetch image:', err);
        setError(true);
      }
    };

    fetchImage();
  }, [imageId]);

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Failed to load image</Text>
      </View>
    );
  }

  if (!imageUrl) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={style}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  errorText: {
    color: 'red',
  },
});

export default WorkoutImage;
