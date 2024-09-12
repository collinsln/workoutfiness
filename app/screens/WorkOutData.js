export const workouts= {
    'Weight Loss': {
      Beginner: [
        { name: 'Cardio Blast', imageId: '1', description: 'High-intensity cardio workout to burn calories.', countdown: 20 },
        { name: 'Jogging', imageId: '2', description: 'Light jogging to boost heart rate and burn fat.', countdown: 20 },
        { name: 'Jumping Jacks', imageId: '3', description: 'Simple full-body cardio exercise.', countdown: 20 }
      ],
      Intermediate: [
        { name: 'HIIT Circuit', imageId: '4', description: 'Interval training with short bursts of intense exercise.', countdown: 30 },
        { name: 'Running', imageId: '5', description: 'High-speed running for fat burning.', countdown: 30 },
        { name: 'Skipping Rope', imageId: '6', description: 'Boosts stamina and burns calories fast.', countdown: 30 },
        { name: 'Mountain Climbers', imageId: '7', description: 'Engage core and burn calories.', countdown: 30 },
        { name: 'Cycling', imageId: '8', description: 'Medium-intensity cardio workout on a cycle.', countdown: 30 },
        { name: 'Burpees', imageId: '9', description: 'High-intensity cardio involving jumps and squats.', countdown: 30 },
        { name: 'Swimming', imageId: '10', description: 'Total body workout with low impact on joints.', countdown: 30 },
        { name: 'Rowing', imageId: '11', description: 'Cardio workout targeting the upper body and core.', countdown: 30 },
        { name: 'Boxing', imageId: '12', description: 'High-intensity cardio workout with punches.', countdown: 30 },
        { name: 'Dancing', imageId: '13', description: 'Fun way to get moving and burn calories.', countdown: 30 }
      ],
      Advanced: [
        { name: 'Sprints', imageId: '14', description: 'Short, fast running sprints for calorie burning.', countdown: 40 },
        { name: 'Jump Rope Double Unders', imageId: '15', description: 'Advanced skipping technique for fat burning.', countdown: 40 },
        { name: 'Kettlebell Swings', imageId: '16', description: 'Full-body cardio and strength workout.', countdown: 40 },
        { name: 'Box Jumps', imageId: '17', description: 'High-impact jumping exercise to burn fat.', countdown: 40 },
        { name: 'Battle Ropes', imageId: '18', description: 'Intense full-body cardio workout.', countdown: 40 },
        { name: 'Rowing Intervals', imageId: '19', description: 'Alternating speed and resistance for fat burning.', countdown: 40 },
        { name: 'Treadmill Sprint Intervals', imageId: '20', description: 'Alternating fast and slow speeds to burn calories.', countdown: 40 },
        { name: 'HIIT Running', imageId: '21', description: 'High-intensity interval running to torch fat.', countdown: 40 },
        { name: 'Burpee Pull-Ups', imageId: '22', description: 'Combination of burpees and pull-ups for total-body burn.', countdown: 40 },
        { name: 'Stair Sprints', imageId: '23', description: 'Running sprints on stairs for explosive fat burning.', countdown: 40 },
        { name: 'Plyo Push-Ups', imageId: '24', description: 'Advanced push-up variation for power and endurance.', countdown: 40 },
        { name: 'Climbing', imageId: '25', description: 'Full-body workout involving cardio and strength.', countdown: 40 }
      ]
    },
    'Muscle Gain': {
      Beginner: [
        { name: 'Strength Training', imageId: '26', description: 'Focused on building muscle strength and size.', countdown: 20 },
        { name: 'Bodyweight Squats', imageId: '27', description: 'Basic lower body strength training exercise.', countdown: 20 },
        { name: 'Push-ups', imageId: '28', description: 'Bodyweight exercise to build upper body strength.', countdown: 20 }
      ],
      Intermediate: [
        { name: 'Bodybuilding', imageId: '29', description: 'Routine to enhance muscle mass and definition.', countdown: 30 },
        { name: 'Bench Press', imageId: '30', description: 'Target chest muscles with this weight lifting exercise.', countdown: 30 },
        { name: 'Deadlifts', imageId: '31', description: 'Full-body lift targeting legs and back muscles.', countdown: 30 },
        { name: 'Bicep Curls', imageId: '32', description: 'Isolated bicep training to build arm muscle.', countdown: 30 },
        { name: 'Pull-Ups', imageId: '33', description: 'Compound upper body exercise.', countdown: 30 },
        { name: 'Lunges', imageId: '34', description: 'Lower body strength exercise.', countdown: 30 },
        { name: 'Shoulder Press', imageId: '35', description: 'Build shoulder muscles with overhead press.', countdown: 30 },
        { name: 'Dumbbell Rows', imageId: '36', description: 'Strength training for back muscles.', countdown: 30 },
        { name: 'Leg Press', imageId: '37', description: 'Weight lifting for legs.', countdown: 30 },
        { name: 'Tricep Dips', imageId: '38', description: 'Strengthen arms with this bodyweight exercise.', countdown: 30 }
      ],
      Advanced: [
        { name: 'Powerlifting', imageId: '39', description: 'Lifting heavy weights for strength development.', countdown: 40 },
        { name: 'Weighted Squats', imageId: '40', description: 'Advanced lower body workout with weights.', countdown: 40 },
        { name: 'Clean and Jerk', imageId: '41', description: 'Olympic lift targeting full body strength.', countdown: 40 },
        { name: 'Snatch', imageId: '42', description: 'Explosive lift for advanced lifters.', countdown: 40 },
        { name: 'Farmer’s Walk', imageId: '43', description: 'Grip and strength training by carrying heavy weights.', countdown: 40 },
        { name: 'Overhead Squats', imageId: '44', description: 'Weighted squats with added shoulder strength.', countdown: 40 },
        { name: 'Chest Flys', imageId: '45', description: 'Isolated chest exercise for definition.', countdown: 40 },
        { name: 'Front Squats', imageId: '46', description: 'Quad-focused squat variation with weights.', countdown: 40 },
        { name: 'Weighted Lunges', imageId: '47', description: 'Advanced lower body exercise with weights.', countdown: 40 },
        { name: 'Bulgarian Split Squats', imageId: '48', description: 'Unilateral leg workout for strength and balance.', countdown: 40 },
        { name: 'Rack Pulls', imageId: '49', description: 'Heavy deadlift variation for back strength.', countdown: 40 },
        { name: 'Tire Flips', imageId: '50', description: 'Full-body power exercise using heavy tires.', countdown: 40 }
      ]
    },
    'Endurance': {
      Beginner: [
        { name: 'Brisk Walking', imageId: '51', description: 'Improve endurance with regular brisk walks.', countdown: 20 },
        { name: 'Cycling', imageId: '52', description: 'Low-intensity cycling to increase stamina.', countdown: 20 },
        { name: 'Swimming', imageId: '53', description: 'Endurance training with low joint impact.', countdown: 20 }
      ],
      Intermediate: [
        { name: 'Jogging', imageId: '54', description: 'Boost cardiovascular endurance with regular jogging.', countdown: 30 },
        { name: 'Long-Distance Cycling', imageId: '55', description: 'Enhance stamina with extended cycling sessions.', countdown: 30 },
        { name: 'Swimming Laps', imageId: '56', description: 'Increase endurance by swimming longer distances.', countdown: 30 },
        { name: 'Rowing', imageId: '57', description: 'Full-body endurance workout with rowing.', countdown: 30 },
        { name: 'Elliptical Training', imageId: '58', description: 'Endurance workout with low impact on joints.', countdown: 30 },
        { name: 'Hiking', imageId: '59', description: 'Outdoor activity to build endurance over time.', countdown: 30 },
        { name: 'Jump Rope', imageId: '60', description: 'Increase stamina with skipping rope sessions.', countdown: 30 },
        { name: 'Climbing Stairs', imageId: '61', description: 'Endurance training by climbing stairs.', countdown: 30 },
        { name: 'Interval Training', imageId: '62', description: 'Alternate intensity to build endurance.', countdown: 30 },
        { name: 'Running Intervals', imageId: '63', description: 'High-intensity running intervals for endurance.', countdown: 30 }
      ],
      Advanced: [
        { name: 'Marathon Running', imageId: '64', description: 'High-endurance running for long distances.', countdown: 40 },
        { name: 'Ultra Running', imageId: '65', description: 'Extreme distance running for advanced endurance.', countdown: 40 },
        { name: 'Triathlon Training', imageId: '66', description: 'Endurance training across swimming, cycling, and running.', countdown: 40 },
        { name: 'Long-Distance Cycling', imageId: '67', description: 'Extended cycling sessions for advanced stamina.', countdown: 40 },
        { name: 'Mountain Running', imageId: '68', description: 'Challenging running on steep terrains.', countdown: 40 },
        { name: 'Endurance Swimming', imageId: '69', description: 'Swimming long distances for peak endurance.', countdown: 40 },
        { name: 'Rowing Marathons', imageId: '70', description: 'Extended rowing sessions for endurance.', countdown: 40 },
        { name: 'High-Altitude Training', imageId: '71', description: 'Endurance training in high-altitude conditions.', countdown: 40 },
        { name: 'Long-Distance Hiking', imageId: '72', description: 'Extended hiking sessions for endurance.', countdown: 40 },
        { name: 'Adventure Racing', imageId: '73', description: 'Multi-sport endurance events requiring peak stamina.', countdown: 40 }
      ]
    }
  };
  