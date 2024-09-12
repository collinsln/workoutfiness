// BackgroundMusic.js
import React, { useEffect, useRef } from 'react';
import { Audio } from 'expo-av';

const BackgroundMusic = () => {
    const sound = useRef(null);

    useEffect(() => {
        const loadSound = async () => {
            try {
                const { sound: loadedSound } = await Audio.Sound.createAsync(
                    require('../assets/music/Tonedefault1.mp3') // Correct path to the MP3 file
                );
                loadedSound.setIsLoopingAsync(true); // Optionally loop the sound
                loadedSound.playAsync();
                sound.current = loadedSound;
            } catch (error) {
                console.error('Failed to load sound', error);
            }
        };

        loadSound();

        return () => {
            if (sound.current) {
                sound.current.unloadAsync(); // Clean up
            }
        };
    }, []);

    return null; // This component does not render anything
};

export default BackgroundMusic;
