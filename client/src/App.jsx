import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Changed Switch to Routes
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import DroughtStatistics from './components/DroughtStatistics.jsx';
import DesertificationStatus from './components/DesertificationStatus.jsx';
import RemediationMethods from './components/RemediationMethods.jsx';
import InteractiveMap from './components/InteractiveMap.jsx';
import Resources from './components/Resources.jsx';
import Contact from './components/Contact.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use element prop instead of component */}
        <Route path="/drought" element={<DroughtStatistics />} />
        <Route path="/desertification" element={<DesertificationStatus />} />
        <Route path="/remediation" element={<RemediationMethods />} />
        <Route path="/map" element={<InteractiveMap />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
