import React, { useEffect } from 'react';
import { View, Text, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation if you plan to navigate

const NotificationSetup = () => {
    const navigation = useNavigation(); // Use navigation if you want to navigate on notification tap

    useEffect(() => {
        const setupNotifications = async () => {
            try {
                // Request permissions for notifications
                const { status } = await Notifications.getPermissionsAsync();
                if (status !== 'granted') {
                    const { status: newStatus } = await Notifications.requestPermissionsAsync();
                    if (newStatus !== 'granted') {
                        Alert.alert('Notification Permission', 'Notification permissions not granted');
                        return;
                    }
                }

                // Schedule a notification
                await Notifications.scheduleNotificationAsync({
                    content: {
                        title: "Workout Reminder",
                        body: "Time for your next workout!",
                        sound: "default", // Ensure sound is set
                    },
                    trigger: {
                        seconds: 7200, 
                        repeats: true, // Repeat every hour
                    },
                });

                // Handle notification when app is in the foreground
                const notificationReceivedListener = Notifications.addNotificationReceivedListener(notification => {
                    
                });

                // Handle notification tap actions
                const notificationResponseListener = Notifications.addNotificationResponseReceivedListener(response => {
                 
                    const { exercise } = response.notification.request.content.data;
                    if (exercise) {
                        navigation.navigate('WorkoutDetailScreen', { exercise });
                    }
                });

                // Cleanup listeners on component unmount
                return () => {
                    notificationReceivedListener.remove();
                    notificationResponseListener.remove();
                };

            } catch (error) {
                console.error('Error setting up notifications:', error);
            }
        };

        setupNotifications();
    }, [navigation]);

    return (
        <View>
            {/* Optionally include a status message or visual indicator here */}
        </View>
    );
};

export default NotificationSetup;
