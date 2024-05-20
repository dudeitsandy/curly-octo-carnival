import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App = () => (
  <div>
    <Header />
    <Navbar />
    <MainContent />
    <Footer />
  </div>
);

const Header = () => (
  <header className="header">
    <h1>Community Scheduler</h1>
  </header>
);

const Navbar = () => (
  <nav className="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#contact">Contact</a>
  </nav>
);

const MainContent = () => (
  <main className="main-content">
    <h2>Welcome to our Community Scheduler</h2>
    <p>Book appointments, manage events, and collaborate with your community.</p>
    <AppointmentForm />
    <Calendar />
  </main>
);

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

const Calendar = () => {
  return (
    <div className="calendar">
      <h3>Upcoming Appointments</h3>
      <ul>
        <li>John Doe - 2024-05-20 at 10:00 AM</li>
        <li>Jane Smith - 2024-05-21 at 02:00 PM</li>
        <li>Bob Johnson - 2024-05-22 at 11:00 AM</li>
      </ul>
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Community Scheduler</p>
  </footer>
);

ReactDOM.render(<App />, document.getElementById('root'));
