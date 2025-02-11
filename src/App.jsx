import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; 
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import "./App.css";
import logo from "./assets/i.png"; // Public içindeki dosya direkt kullanılabilir

<img src={logo} alt="Logo" className="logo" />

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        {/* Navbar içeriği */}
        <div className="nav-left">
          <img src={logo} alt="Logo" className="logo" /> {/* Logoyu ekledik */}
          <ul className="nav-links">
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/about">Hakkımda</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}
