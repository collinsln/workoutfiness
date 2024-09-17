
const workoutDetails = 
{
  'Jump Squat': {
      description: 'A plyometric exercise that involves jumping explosively from a squat position. It enhances lower body strength, power, and explosiveness.',
      expertAdvice: 'Focus on landing softly to minimize impact on your knees. Maintain good form and control throughout the jump.',
      dos: [
          'Engage your core to stabilize your body.',
          'Keep your knees aligned with your toes.',
          'Use your arms to help propel yourself upward.'
      ],
      donts: [
          'Avoid letting your knees cave inward.',
          'Don’t jump too high; focus on proper form instead.'
      ],
      reps: {
          beginner: '8-10 reps',
          intermediate: '12-15 reps',
          advanced: '15-20 reps'
      }
  },
  'Bicycle Crunch': {
      description: 'An abdominal exercise that targets the obliques and rectus abdominis by mimicking a pedaling motion while lying on your back.',
      expertAdvice: 'Keep your lower back pressed to the ground to avoid strain. Perform the movement in a controlled manner to maximize effectiveness.',
      dos: [
          'Engage your core throughout the exercise.',
          'Rotate your torso to touch your elbow to the opposite knee.',
          'Breathe out as you bring your elbow towards your knee.'
      ],
      donts: [
          'Don’t pull on your neck; use your abs to perform the movement.',
          'Avoid arching your lower back.'
      ],
      reps: {
          beginner: '10-12 reps per side',
          intermediate: '15-20 reps per side',
          advanced: '20-30 reps per side'
      }
  },
  'Bicyle Crunches': {
      description: 'Similar to Bicycle Crunches, this exercise involves a pedaling motion but with variations that may include more twisting or different leg positions.',
      expertAdvice: 'Maintain a steady pace and focus on engaging your core muscles effectively. Ensure that you perform each rep with proper form.',
      dos: [
          'Keep your movements controlled and deliberate.',
          'Maintain a steady breathing pattern.',
          'Ensure your lower back stays flat on the ground.'
      ],
      donts: [
          'Don’t rush through the exercise; form is crucial.',
          'Avoid excessive twisting to prevent strain on your back.'
      ],
      reps: {
          beginner: '10-15 reps per side',
          intermediate: '15-25 reps per side',
          advanced: '25-35 reps per side'
      }
  },
  'Calf Raises': {
      description: 'An exercise that targets the calves by raising your heels off the ground while standing. It helps build strength and endurance in the lower legs.',
      expertAdvice: 'Perform the exercise slowly to ensure full range of motion. Consider using weights for added resistance once you are comfortable with the movement.',
      dos: [
          'Keep your body straight and avoid leaning forward.',
          'Pause briefly at the top of the movement.',
          'Use a full range of motion, lowering your heels below the level of the step if using one.'
      ],
      donts: [
          'Avoid bouncing or using momentum to lift yourself.',
          'Don’t let your knees bend during the exercise.'
      ],
      reps: {
          beginner: '12-15 reps',
          intermediate: '15-20 reps',
          advanced: '20-30 reps'
      }
  },
  'Cossack Squat': {
      description: 'A dynamic squat variation that targets the inner thighs and hips by shifting weight from one side to the other while squatting.',
      expertAdvice: 'Keep your torso upright and focus on lowering yourself slowly to maximize muscle engagement. Use a chair or wall for support if needed.',
      dos: [
          'Engage your core and keep your back straight.',
          'Perform the squat on each side equally.',
          'Go as low as your flexibility allows.'
      ],
      donts: [
          'Avoid leaning forward excessively.',
          'Don’t let your knee extend past your toes.'
      ],
      reps: {
          beginner: '8-12 reps per side',
          intermediate: '12-15 reps per side',
          advanced: '15-20 reps per side'
      }
  },
  'Finger Wave': {
      description: 'An exercise involving a wave-like motion with your fingers, primarily targeting the forearm muscles and improving dexterity.',
      expertAdvice: 'Perform the movement slowly and with precision to maximize muscle engagement. Consider using resistance bands for added challenge.',
      dos: [
          'Keep your movements smooth and controlled.',
          'Engage your forearm muscles throughout the exercise.',
          'Perform the exercise on both hands for balanced development.'
      ],
      donts: [
          'Avoid jerking or sudden movements.',
          'Don’t use excessive force; focus on form and control.'
      ],
      reps: {
          beginner: '15-20 reps per hand',
          intermediate: '20-30 reps per hand',
          advanced: '30-50 reps per hand'
      }
  },
  'Forward Lunge': {
      description: 'An exercise that targets the quads, glutes, and hamstrings by stepping forward into a lunge position and then returning to the starting position.',
      expertAdvice: 'Ensure that your front knee does not extend past your toes during the lunge. Keep your back straight and engage your core for stability.',
      dos: [
          'Step forward with a long stride and lower your body slowly.',
          'Keep your front knee aligned with your ankle.',
          'Alternate legs to work both sides equally.'
      ],
      donts: [
          'Avoid letting your knee collapse inward.',
          'Don’t lean too far forward or backward.'
      ],
      reps: {
          beginner: '10-12 reps per leg',
          intermediate: '15-20 reps per leg',
          advanced: '20-30 reps per leg'
      }
  },
  'Incline Push_Up': {
      description: 'A variation of the standard push-up where your hands are elevated on a bench or step, targeting the upper chest and shoulders.',
      expertAdvice: 'Maintain a straight line from your head to heels throughout the exercise. Focus on squeezing your chest muscles as you push up.',
      dos: [
          'Keep your body in a straight line.',
          'Engage your core and avoid sagging hips.',
          'Lower yourself slowly and with control.'
      ],
      donts: [
          'Don’t let your elbows flare out excessively.',
          'Avoid arching your back.'
      ],
      reps: {
          beginner: '8-12 reps',
          intermediate: '12-15 reps',
          advanced: '15-20 reps'
      }
  },
  'Kneeling Diamond_Push_Ups': {
      description: 'A push-up variation performed on your knees with hands positioned close together, targeting the triceps and chest.',
      expertAdvice: 'Keep your body in a straight line from head to knees. Focus on keeping your elbows close to your body to maximize tricep engagement.',
      dos: [
          'Engage your core and maintain a straight line.',
          'Lower yourself until your chest is close to your hands.',
          'Push back up with control.'
      ],
      donts: [
          'Avoid letting your hips sag.',
          'Don’t flare your elbows outwards.'
      ],
      reps: {
          beginner: '8-12 reps',
          intermediate: '12-15 reps',
          advanced: '15-20 reps'
      }
  },
  'Push-Ups': {
      description: 'A fundamental exercise that targets the chest, triceps, and shoulders by pushing your body up and down from a plank position.',
      expertAdvice: 'Maintain a rigid body position and avoid letting your hips sag. Focus on full range of motion and proper form.',
      dos: [
          'Keep your hands shoulder-width apart.',
          'Engage your core and keep your body straight.',
          'Lower yourself until your chest nearly touches the ground.'
      ],
      donts: [
          'Avoid arching your back.',
          'Don’t let your elbows flare out excessively.'
      ],
      reps: {
          beginner: '8-12 reps',
          intermediate: '12-20 reps',
          advanced: '20-30 reps'
      }
  },
  'Reverse Crunch': {
      description: 'An abdominal exercise that focuses on the lower abs by lifting your hips towards your chest while lying on your back.',
      expertAdvice: 'Keep your movements controlled and avoid using momentum. Focus on engaging your lower abs to lift your hips.',
      dos: [
          'Keep your hands at your sides or under your hips for support.',
          'Engage your core throughout the movement.',
          'Lift your hips towards your chest slowly and with control.'
      ],
      donts: [
          'Avoid jerking your legs up.',
          'Don’t use your hands to pull your legs.'
      ],
      reps: {
          beginner: '10-15 reps',
          intermediate: '15-20 reps',
          advanced: '20-30 reps'
      }
  },
  'Rope Assisted Leg Raise': {
      description: 'An exercise that targets the lower abs by lifting your legs while holding onto a rope or strap for support.',
      expertAdvice: 'Perform the exercise slowly to maximize muscle engagement. Keep your lower back pressed to the floor throughout the movement.',
      dos: [
          'Engage your core and avoid using momentum.',
          'Keep your legs straight as you lift them.',
          'Lower your legs slowly and with control.'
      ],
      donts: [
          'Don’t let your lower back lift off the ground.',
          'Avoid swinging your legs.'
      ],
      reps: {
          beginner: '10-15 reps',
          intermediate: '15-20 reps',
          advanced: '20-30 reps'
      }
  },
  'Side Crunch': {
      description: 'An exercise that targets the obliques by crunching to the side while lying on your back or side.',
      expertAdvice: 'Perform the exercise slowly and with control to maximize oblique engagement. Keep your movements precise and avoid using momentum.',
      dos: [
          'Engage your oblique muscles throughout the movement.',
          'Keep your lower back pressed to the ground.',
          'Perform equal reps on both sides.'
      ],
      donts: [
          'Don’t pull on your neck.',
          'Avoid using excessive force.'
      ],
      reps: {
          beginner: '10-15 reps per side',
          intermediate: '15-20 reps per side',
          advanced: '20-30 reps per side'
      }
  },
  'Single Leg Squat': {
      description: 'A challenging squat variation performed on one leg, targeting the quads, glutes, and balance.',
      expertAdvice: 'Use a support like a chair or wall if needed. Focus on maintaining balance and control throughout the movement.',
      dos: [
          'Engage your core to stabilize your body.',
          'Keep your knee aligned with your toes.',
          'Perform the squat slowly and with control.'
      ],
      donts: [
          'Avoid letting your knee collapse inward.',
          'Don’t lean too far forward or backward.'
      ],
      reps: {
          beginner: '6-10 reps per leg',
          intermediate: '10-15 reps per leg',
          advanced: '15-20 reps per leg'
      }
  },
  'Single Leg Squat_Reach': {
      description: 'A single-leg squat variation where you reach forward with your arms while squatting, adding an element of balance and flexibility.',
      expertAdvice: 'Focus on keeping your back straight and your core engaged. Reach forward with control and avoid losing balance.',
      dos: [
          'Engage your core and keep your body upright.',
          'Reach forward while maintaining control.',
          'Perform the movement slowly to maximize effectiveness.'
      ],
      donts: [
          'Avoid letting your knee drift inward.',
          'Don’t reach too far forward and lose balance.'
      ],
      reps: {
          beginner: '6-10 reps per leg',
          intermediate: '10-15 reps per leg',
          advanced: '15-20 reps per leg'
      }
  },
  'Split Squat': {
      description: 'An exercise that targets the quads and glutes by performing a squat with one leg forward and the other leg behind.',
      expertAdvice: 'Ensure your front knee does not extend past your toes. Keep your torso upright and maintain balance throughout the movement.',
      dos: [
          'Engage your core to keep your balance.',
          'Perform the squat slowly and with control.',
          'Ensure your front knee stays aligned with your toes.'
      ],
      donts: [
          'Avoid letting your knee cave inward.',
          'Don’t lean too far forward or backward.'
      ],
      reps: {
          beginner: '10-12 reps per leg',
          intermediate: '12-15 reps per leg',
          advanced: '15-20 reps per leg'
      }
  },
  'Squats': {
      description: 'A fundamental lower body exercise that targets the quads, hamstrings, and glutes by lowering and raising your body while standing.',
      expertAdvice: 'Keep your chest up and your back straight. Ensure your knees stay in line with your toes and avoid letting them cave inward.',
      dos: [
          'Engage your core and keep your weight on your heels.',
          'Lower yourself to at least parallel to the ground.',
          'Push through your heels to return to the starting position.'
      ],
      donts: [
          'Avoid letting your knees extend past your toes.',
          'Don’t round your back or lean too far forward.'
      ],
      reps: {
          beginner: '10-15 reps',
          intermediate: '15-20 reps',
          advanced: '20-30 reps'
      }
  },
  'Standing Leg Raise': {
      description: 'An exercise that targets the hip flexors and lower abs by raising one leg while standing, typically performed with a support for balance.',
      expertAdvice: 'Keep your core engaged and avoid leaning to the side. Use a chair or wall for support if needed.',
      dos: [
          'Engage your core to maintain balance.',
          'Raise your leg to hip height or as high as possible.',
          'Perform the movement slowly and with control.'
      ],
      donts: [
          'Avoid swinging your leg.',
          'Don’t lean to the side or use momentum.'
      ],
      reps: {
          beginner: '10-12 reps per leg',
          intermediate: '15-20 reps per leg',
          advanced: '20-30 reps per leg'
      }
  },
  'Standing Trunk Twist': {
      description: 'An exercise that targets the obliques by twisting your torso while standing, often performed with a weight or resistance band.',
      expertAdvice: 'Perform the twist in a controlled manner and avoid jerking. Keep your movements smooth to effectively engage the obliques.',
      dos: [
          'Engage your core throughout the movement.',
          'Keep your feet planted and rotate your torso.',
          'Perform the twist slowly to maximize muscle engagement.'
      ],
      donts: [
          'Avoid twisting excessively; maintain control.',
          'Don’t use your arms to pull your torso.'
      ],
      reps: {
          beginner: '10-15 reps per side',
          intermediate: '15-20 reps per side',
          advanced: '20-30 reps per side'
      }
  },
  'Straight Arm Elevated Dip': {
      description: 'An exercise that targets the triceps and shoulders by performing dips with your hands elevated on a bench or step.',
      expertAdvice: 'Keep your body close to the bench and focus on lowering yourself slowly. Maintain a straight line from your head to your heels.',
      dos: [
          'Keep your elbows close to your body.',
          'Lower yourself until your upper arms are parallel to the ground.',
          'Push up with control and engage your triceps.'
      ],
      donts: [
          'Avoid letting your shoulders hunch up.',
          'Don’t use your legs to assist the movement.'
      ],
      reps: {
          beginner: '8-12 reps',
          intermediate: '12-15 reps',
          advanced: '15-20 reps'
      }
  },
  'Tricep Dip': {
      description: 'An exercise that targets the triceps by lowering and raising your body while sitting on a bench or chair with your hands beside your hips.',
      expertAdvice: 'Keep your back close to the bench and avoid flaring your elbows out. Perform the movement slowly for maximum effectiveness.',
      dos: [
          'Keep your elbows pointing backwards.',
          'Lower yourself until your arms form a 90-degree angle.',
          'Push up with your triceps and avoid using momentum.'
      ],
      donts: [
          'Don’t let your shoulders hunch up.',
          'Avoid extending your legs too much for assistance.'
      ],
      reps: {
          beginner: '8-12 reps',
          intermediate: '12-15 reps',
          advanced: '15-20 reps'
      }
  },
  'Wall Pshups': {
      description: 'A modified push-up performed against a wall, targeting the chest and triceps with less intensity than a standard push-up.',
      expertAdvice: 'Keep your body in a straight line and focus on engaging your chest and triceps. Adjust the distance from the wall for varying difficulty levels.',
      dos: [
          'Keep your hands shoulder-width apart.',
          'Engage your core and keep your body straight.',
          'Perform the push-up slowly and with control.'
      ],
      donts: [
          'Don’t let your elbows flare outwards.',
          'Avoid arching your back.'
      ],
      reps: {
          beginner: '10-15 reps',
          intermediate: '15-20 reps',
          advanced: '20-30 reps'
      }
  },
  'Forward Lunges': {
      description: 'A lower body exercise that involves stepping forward into a lunge position, targeting the quads, hamstrings, and glutes.',
      expertAdvice: 'Ensure your front knee stays aligned with your ankle. Maintain a straight posture and avoid leaning forward excessively.',
      dos: [
          'Keep your torso upright and core engaged.',
          'Step forward with a long stride.',
          'Lower yourself until your front thigh is parallel to the ground.'
      ],
      donts: [
          'Avoid letting your knee extend past your toes.',
          'Don’t lean forward or backward excessively.'
      ],
      reps: {
          beginner: '10-12 reps per leg',
          intermediate: '15-20 reps per leg',
          advanced: '20-30 reps per leg'
      }
  },
  'Bent-Knee Sit-Ups': {
      description: 'An abdominal exercise performed with knees bent, focusing on the upper abs and minimizing strain on the lower back.',
      expertAdvice: 'Keep your feet flat on the ground and avoid pulling on your neck. Engage your core and lift your upper body towards your knees.',
      dos: [
          'Keep your hands at your sides or across your chest.',
          'Engage your core to lift your upper body.',
          'Avoid jerking your body.'
      ],
      donts: [
          'Don’t pull on your neck or head.',
          'Avoid arching your back excessively.'
      ],
      reps: {
          beginner: '10-15 reps',
          intermediate: '15-20 reps',
          advanced: '20-30 reps'
      }
  },
  'Bicycle Crunches': {
      description: 'An abdominal exercise that involves alternating knee-to-elbow movements while lying on your back, targeting the abs and obliques.',
      expertAdvice: 'Maintain a steady pace and control your movements. Ensure your lower back stays pressed to the ground throughout the exercise.',
      dos: [
          'Keep your lower back flat on the ground.',
          'Engage your core throughout the exercise.',
          'Perform the exercise slowly for better muscle engagement.'
      ],
      donts: [
          'Don’t pull on your neck or head.',
          'Avoid speeding through the exercise.'
      ],
      reps: {
          beginner: '10-15 reps per side',
          intermediate: '15-20 reps per side',
          advanced: '20-30 reps per side'
      }
  }
};
export default workoutDetails;