import React from 'react';
import AppointmentForm from './AppointmentForm';
import Calendar from './Calendar';
import '../styles.css';

const MainContent = () => (
  <main className="main-content">
    <div className="cards">
      <div className="card">
        <h3>Our Services</h3>
        <p>Book appointments, manage events, and collaborate with your community.</p>
      </div>
      <div className="card">
        <h3>Why Choose Us?</h3>
        <p>We provide the best scheduling solutions for your community needs.</p>
      </div>
      <div className="card">
        <h3>Contact Us</h3>
        <p>Reach out to us for more information about our services.</p>
      </div>
    </div>
    <AppointmentForm />
    <Calendar />
  </main>
);

export default MainContent;
