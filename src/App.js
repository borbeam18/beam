import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Rooms from './components/Rooms';  // แก้จากชื่อเป็น components
import Carosel from './pages/Carosel';
import HomePage from './home/Homepage'; // หากเป็นโฟลเดอร์ home ให้ใช้แบบนี้
import Footer from './food/Footer';  // แก้จากชื่อเป็น food

import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Carosel />
        
        {/* ตั้งค่า routing สำหรับหน้า HomePage */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
