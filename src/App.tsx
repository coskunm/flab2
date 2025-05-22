import React from 'react';
import { Shield } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrokerList from './components/BrokerList';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <BrokerList />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;