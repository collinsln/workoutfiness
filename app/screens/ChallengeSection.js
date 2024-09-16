import React from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ChallengeSection = () => {
  return (
    <View style={{ flex: 1 }}>
      <Calendar
        markedDates={{
          '2024-09-12': { selected: true, marked: true, selectedColor: 'blue' },
          '2024-09-13': { marked: true },
          '2024-09-14': { marked: true },
        }}
      />
    </View>
  );
};

export default ChallengeSection;
