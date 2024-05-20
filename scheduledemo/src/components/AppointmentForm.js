import React, { useState } from 'react';
import '../styles.css';

const AppointmentForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked for ${name} on ${date} at ${time}`);
    setName('');
    setDate('');
    setTime('');
  };

  return (
    <div className="form-container">
      <h3>Book an Appointment</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Book Appointment</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
