import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeroScreen from './components/HeroScreen/HeroScreen';
import AboutSection from './components/AboutSection/AboutSection';
import ClassesSection from './components/ClassesSection/ClassesSection';
import ReviewSection from './components/ReviewSection/ReviewSection';
import ContactSection from './components/ContactSection/ContactSection';

const App = () => (
  <div className="App">
    <HeroScreen />
    <AboutSection />
    <ClassesSection />
    <ReviewSection />
    <ContactSection />
  </div>
);

export default App;
