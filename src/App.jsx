import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Services } from './components/AboutServices';
import Portfolio from './components/Portfolio';
import { Contact, Footer } from './components/ContactFooter';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
