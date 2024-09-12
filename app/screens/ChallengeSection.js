import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

function ChallengeSection() {
  const [date, setDate] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});

  const handleDayClick = (value) => {
    const dateString = value.toISOString().split('T')[0];
    setMarkedDates((prevMarkedDates) => ({
      ...prevMarkedDates,
      [dateString]: true,
    }));
  };

  const renderTileContent = ({ date, view }) => {
    const dateString = date.toISOString().split('T')[0];
    return view === 'month' && markedDates[dateString] ? (
      <div style={{ backgroundColor: 'blue', borderRadius: '50%', width: '10px', height: '10px' }} />
    ) : null;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Workout Challenge</h1>
      <p style={styles.description}>
        Complete your workouts daily and track your progress on the calendar.
      </p>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={renderTileContent}
        onClickDay={handleDayClick}
      />
      <p style={styles.tips}>Stay consistent and keep moving!</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    maxWidth: '600px',
    margin: '0 auto',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  tips: {
    fontSize: '16px',
    color: '#333333',
    marginTop: '20px',
  },
};

export default ChallengeSection;
