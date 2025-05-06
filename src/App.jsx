import React from 'react'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import TrendingContent from './components/TrendingContent/TrendingContent';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Features/>
    <TrendingContent/>
    <CallToAction/>
    <Footer/>
    </>
  );
}

export default App;
