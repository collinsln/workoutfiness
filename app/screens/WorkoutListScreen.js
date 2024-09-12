import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'; // Correct import for Picker
import SpinningAsterisk from './SpinningAsterisk'; // Import the SpinningAsterisk component

// Data and components
const WorkoutPicker = ({ difficulty, setDifficulty }) => (
  <Picker
    selectedValue={difficulty}
    style={styles.picker}
    onValueChange={(itemValue) => setDifficulty(itemValue)}
  >
    <Picker.Item label="Beginner" value="Beginner" />
    <Picker.Item label="Intermediate" value="Intermediate" />
    <Picker.Item label="Advanced" value="Advanced" />
  </Picker>
);

const WorkoutItem = ({ workout, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(workout)}>
    <Text style={styles.workoutName}>{workout.name}</Text>
    <Text style={styles.workoutDescription}>{workout.description}</Text>
  </TouchableOpacity>
);

// Expanded workout list with difficulty levels
const workouts = {
  'Weight Loss': {
    Beginner: [
      { name: 'Cardio Blast', imageId: '1', description: 'High-intensity cardio workout to burn calories.' },
      { name: 'Jogging', imageId: '2', description: 'Light jogging to boost heart rate and burn fat.' },
      { name: 'Jumping Jacks', imageId: '3', description: 'Simple full-body cardio exercise.' }
    ],
    Intermediate: [
      { name: 'HIIT Circuit', imageId: '4', description: 'Interval training with short bursts of intense exercise.' },
      { name: 'Running', imageId: '5', description: 'High-speed running for fat burning.' },
      { name: 'Skipping Rope', imageId: '6', description: 'Boosts stamina and burns calories fast.' },
      { name: 'Mountain Climbers', imageId: '7', description: 'Engage core and burn calories.' },
      { name: 'Cycling', imageId: '8', description: 'Medium-intensity cardio workout on a cycle.' },
      { name: 'Burpees', imageId: '9', description: 'High-intensity cardio involving jumps and squats.' },
      { name: 'Swimming', imageId: '10', description: 'Total body workout with low impact on joints.' },
      { name: 'Rowing', imageId: '11', description: 'Cardio workout targeting the upper body and core.' },
      { name: 'Boxing', imageId: '12', description: 'High-intensity cardio workout with punches.' },
      { name: 'Dancing', imageId: '13', description: 'Fun way to get moving and burn calories.' }
    ],
    Advanced: [
      { name: 'Sprints', imageId: '14', description: 'Short, fast running sprints for calorie burning.' },
      { name: 'Jump Rope Double Unders', imageId: '15', description: 'Advanced skipping technique for fat burning.' },
      { name: 'Kettlebell Swings', imageId: '16', description: 'Full-body cardio and strength workout.' },
      { name: 'Box Jumps', imageId: '17', description: 'High-impact jumping exercise to burn fat.' },
      { name: 'Battle Ropes', imageId: '18', description: 'Intense full-body cardio workout.' },
      { name: 'Rowing Intervals', imageId: '19', description: 'Alternating speed and resistance for fat burning.' },
      { name: 'Treadmill Sprint Intervals', imageId: '20', description: 'Alternating fast and slow speeds to burn calories.' },
      { name: 'HIIT Running', imageId: '21', description: 'High-intensity interval running to torch fat.' },
      { name: 'Burpee Pull-Ups', imageId: '22', description: 'Combination of burpees and pull-ups for total-body burn.' },
      { name: 'Stair Sprints', imageId: '23', description: 'Running sprints on stairs for explosive fat burning.' },
      { name: 'Plyo Push-Ups', imageId: '24', description: 'Advanced push-up variation for power and endurance.' },
      { name: 'Climbing', imageId: '25', description: 'Full-body workout involving cardio and strength.' }
    ]
  },
  'Muscle Gain': {
    Beginner: [
      { name: 'Strength Training', imageId: '26', description: 'Focused on building muscle strength and size.' },
      { name: 'Bodyweight Squats', imageId: '27', description: 'Basic lower body strength training exercise.' },
      { name: 'Push-ups', imageId: '28', description: 'Bodyweight exercise to build upper body strength.' }
    ],
    Intermediate: [
      { name: 'Bodybuilding', imageId: '29', description: 'Routine to enhance muscle mass and definition.' },
      { name: 'Bench Press', imageId: '30', description: 'Target chest muscles with this weight lifting exercise.' },
      { name: 'Deadlifts', imageId: '31', description: 'Full-body lift targeting legs and back muscles.' },
      { name: 'Bicep Curls', imageId: '32', description: 'Isolated bicep training to build arm muscle.' },
      { name: 'Pull-Ups', imageId: '33', description: 'Compound upper body exercise.' },
      { name: 'Lunges', imageId: '34', description: 'Lower body strength exercise.' },
      { name: 'Shoulder Press', imageId: '35', description: 'Build shoulder muscles with overhead press.' },
      { name: 'Dumbbell Rows', imageId: '36', description: 'Strength training for back muscles.' },
      { name: 'Leg Press', imageId: '37', description: 'Weight lifting for legs.' },
      { name: 'Tricep Dips', imageId: '38', description: 'Strengthen arms with this bodyweight exercise.' }
    ],
    Advanced: [
      { name: 'Powerlifting', imageId: '39', description: 'Lifting heavy weights for strength development.' },
      { name: 'Weighted Squats', imageId: '40', description: 'Advanced lower body workout with weights.' },
      { name: 'Clean and Jerk', imageId: '41', description: 'Olympic lift targeting full body strength.' },
      { name: 'Snatch', imageId: '42', description: 'Explosive lift for advanced lifters.' },
      { name: 'Farmer’s Walk', imageId: '43', description: 'Grip and strength training by carrying heavy weights.' },
      { name: 'Overhead Squats', imageId: '44', description: 'Weighted squats with added shoulder strength.' },
      { name: 'Chest Flys', imageId: '45', description: 'Isolated chest exercise for definition.' },
      { name: 'Front Squats', imageId: '46', description: 'Quad-focused squat variation with weights.' },
      { name: 'Weighted Lunges', imageId: '47', description: 'Advanced lower body exercise with weights.' },
      { name: 'Bulgarian Split Squats', imageId: '48', description: 'Unilateral leg workout for strength and balance.' },
      { name: 'Rack Pulls', imageId: '49', description: 'Heavy deadlift variation for back strength.' },
      { name: 'Tire Flips', imageId: '50', description: 'Full-body power exercise using heavy tires.' }
    ]
  },
  'Endurance': {
    Beginner: [
      { name: 'Brisk Walking', imageId: '51', description: 'Improve endurance with regular brisk walks.' },
      { name: 'Cycling', imageId: '52', description: 'Low-intensity cycling to increase stamina.' },
      { name: 'Swimming', imageId: '53', description: 'Endurance training with low joint impact.' }
    ],
    Intermediate: [
      { name: 'Jogging', imageId: '54', description: 'Boost cardiovascular endurance with regular jogging.' },
      { name: 'Long-Distance Cycling', imageId: '55', description: 'Enhance stamina with extended cycling sessions.' },
      { name: 'Swimming Laps', imageId: '56', description: 'Increase endurance by swimming longer distances.' },
      { name: 'Rowing', imageId: '57', description: 'Full-body endurance workout with rowing.' },
      { name: 'Elliptical Training', imageId: '58', description: 'Endurance workout with low impact on joints.' },
      { name: 'Hiking', imageId: '59', description: 'Outdoor activity to build endurance over time.' },
      { name: 'Jump Rope', imageId: '60', description: 'Increase stamina with skipping rope sessions.' },
      { name: 'Climbing Stairs', imageId: '61', description: 'Endurance training by climbing stairs.' },
      { name: 'Interval Training', imageId: '62', description: 'Alternate intensity to build endurance.' },
      { name: 'Endurance Running', imageId: '63', description: 'Long-distance running to boost stamina.' }
    ],
    Advanced: [
      { name: 'Marathon Running', imageId: '64', description: 'Endurance challenge with long-distance runs.' },
      { name: 'Trail Running', imageId: '65', description: 'Boost endurance with off-road running.' },
      { name: 'Triathlon Training', imageId: '66', description: 'Advanced endurance workout across multiple sports.' },
      { name: 'Swimming Intervals', imageId: '67', description: 'Advanced swimming to increase stamina.' },
      { name: 'Long-Distance Cycling', imageId: '68', description: 'Build long-lasting endurance on the bike.' },
      { name: 'Ultra Marathon Training', imageId: '69', description: 'Extreme endurance training for ultra marathons.' },
      { name: 'Rowing Marathons', imageId: '70', description: 'Extended rowing sessions to challenge endurance.' },
      { name: 'Mountain Climbing', imageId: '71', description: 'Boost endurance with climbing sessions.' },
      { name: 'Endurance Swimming', imageId: '72', description: 'Advanced swimming to improve endurance.' },
      { name: 'Distance Running', imageId: '73', description: 'Long-distance running to build endurance.' },
      { name: 'CrossFit Endurance', imageId: '74', description: 'High-intensity interval training for endurance.' },
      { name: 'Cycling Races', imageId: '75', description: 'Competitive long-distance cycling.' }
    ]
  },
  'Flexibility': {
    Beginner: [
      { name: 'Yoga', imageId: '76', description: 'Improve flexibility with beginner yoga poses.' },
      { name: 'Dynamic Stretching', imageId: '77', description: 'Gentle stretches to improve flexibility.' },
      { name: 'Foam Rolling', imageId: '78', description: 'Self-massage to increase flexibility and mobility.' }
    ],
    Intermediate: [
      { name: 'Intermediate Yoga', imageId: '79', description: 'Deepen flexibility with intermediate yoga poses.' },
      { name: 'Pilates', imageId: '80', description: 'Core-focused workout to enhance flexibility.' },
      { name: 'Static Stretching', imageId: '81', description: 'Holding stretches to increase flexibility.' },
      { name: 'Pigeon Pose', imageId: '82', description: 'Stretch hips and thighs with this yoga pose.' },
      { name: 'Hamstring Stretch', imageId: '83', description: 'Deep hamstring stretch to improve flexibility.' },
      { name: 'Shoulder Stretch', imageId: '84', description: 'Enhance upper body flexibility with shoulder stretches.' },
      { name: 'Lunging Hip Flexor Stretch', imageId: '85', description: 'Stretch hip flexors and improve mobility.' },
      { name: 'Child’s Pose', imageId: '86', description: 'Gentle yoga pose to stretch the back and hips.' },
      { name: 'Cat-Cow Stretch', imageId: '87', description: 'Yoga pose to increase spine flexibility.' },
      { name: 'Bridge Pose', imageId: '88', description: 'Backbend to stretch the spine and hips.' }
    ],
    Advanced: [
      { name: 'Advanced Yoga', imageId: '89', description: 'Deep flexibility training with advanced poses.' },
      { name: 'Splits Training', imageId: '90', description: 'Work towards full splits with flexibility training.' },
      { name: 'Backbends', imageId: '91', description: 'Advanced flexibility training for the spine.' },
      { name: 'Wheel Pose', imageId: '92', description: 'Deep backbend for advanced flexibility.' },
      { name: 'King Pigeon Pose', imageId: '93', description: 'Advanced yoga pose for deep hip flexibility.' },
      { name: 'Dancer’s Pose', imageId: '94', description: 'Advanced yoga pose for balance and flexibility.' },
      { name: 'Leg Stretches', imageId: '95', description: 'Advanced leg flexibility training.' },
      { name: 'Hand-to-Big-Toe Pose', imageId: '96', description: 'Balancing yoga pose for deep leg flexibility.' },
      { name: 'Forearm Stand', imageId: '97', description: 'Advanced inversion pose for flexibility.' },
      { name: 'Lotus Pose', imageId: '98', description: 'Advanced seated yoga pose for hip flexibility.' },
      { name: 'Standing Forward Fold', imageId: '99', description: 'Deep stretch for the hamstrings and back.' },
      { name: 'Scorpion Pose', imageId: '100', description: 'Advanced yoga pose to stretch the spine and shoulders.' }
    ]
  }
  // Other goals...
};

function WorkoutListScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { goal } = route.params || {}; // Handle undefined route.params
  const [difficulty, setDifficulty] = useState('Beginner');

  if (!goal) {
    return (
      <View style={styles.container}>
        <SpinningAsterisk /> {/* Add SpinningAsterisk here */}
        <Text style={styles.message}>No goal selected</Text>
      </View>
    );
  }

  // Filter workouts based on selected difficulty
  const filteredWorkouts = workouts[goal]?.[difficulty] || [];

  const handleWorkoutPress = (workout) => {
    navigation.navigate('WorkoutDetailScreen', {
      imageId: workout.imageId,
      workoutName: workout.name,
      workoutDescription: workout.description
    });
  };

  return (
    <View style={styles.container}>
      <SpinningAsterisk />
      <Text style={styles.header}>Workouts for {goal}</Text>
      
      {/* Picker Component */}
      <WorkoutPicker difficulty={difficulty} setDifficulty={setDifficulty} />
      
      {/* List of Workouts */}
      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.imageId}
        renderItem={({ item }) => <WorkoutItem workout={item} onPress={handleWorkoutPress} />}
        ListEmptyComponent={<Text style={styles.message}>No workouts available</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  workoutDescription: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#888888',
  },
});

export default WorkoutListScreen;
