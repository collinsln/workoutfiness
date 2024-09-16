// src/screens/BackgroundMusic.js
import React, { useContext, useEffect, useRef } from 'react';
import { MusicContext } from '../context/MusicContext';
import { Audio } from 'expo-av'; // Ensure you have expo-av installed

const BackgroundMusic = () => {
  const { isMuted } = useContext(MusicContext);
  const sound = useRef(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound: newSound } = await Audio.Sound.createAsync(
        require('../assets/music/Tonedefault3.mp3') 
      );
      sound.current = newSound;
      sound.current.setIsLoopingAsync(true); // Ensure the music loops
      sound.current.playAsync(); // Start playing the music
    };

    loadSound();

    return () => {
      sound.current?.unloadAsync(); // Cleanup the sound on unmount
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  useEffect(() => {
    if (sound.current) {
      sound.current.setIsMutedAsync(isMuted);
    }
  }, [isMuted]);

  return null; // This component doesn’t render anything visible
};

export default BackgroundMusic;
