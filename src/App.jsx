// import React from 'react'; 
// import Navbar from './components/Navbar/Navbar';
// import Hero from './components/Hero/Hero';
// import Features from './components/Features/Features';
// import TrendingContent from './components/TrendingContent/TrendingContent';
// import CallToAction from './components/CallToAction/CallToAction';
// import Footer from './components/Footer/Footer';


// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Hero/>
//     <Features/>
//     <TrendingContent/>
//     <CallToAction/>
//     <Footer/>
//     </>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import TrendingContent from './components/TrendingContent/TrendingContent';
import CallToAction from './components/CallToAction/CallToAction';
import PodcastPage from './Pages/PodcastsPage';
import NewsPage from './Pages/NewsPage';
import BroadcastPage from './Pages/BroadcastPage';
import CommunityPage from './Pages/CommunityPage';




function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <TrendingContent />
              <CallToAction />
            </>
          }
        />
        <Route path="/podcasts" element={<PodcastPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/broadcast" element={<BroadcastPage/>} />
        <Route path="/community" element={<CommunityPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
