import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components & Pages
import Navbar from './components/Navbar';
import HomePage from './home/Homepage';
import Rooms from './components/Rooms'; // การใช้ component
import Carosel from './pages/Carosel';
import Footer from './food/Footer'; // Footer Component

// Global Styles
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Carousel */}
        <Carosel />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<Rooms />} /> {/* แสดงรายละเอียดห้องพัก */}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
