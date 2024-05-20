import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <Navbar />
    <Hero />
    <MainContent />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById
