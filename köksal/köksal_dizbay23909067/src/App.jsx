import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from './assets/logo.jpg';
import './App.css';

const Home = () => {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="profile-info">
          <img src={logo} alt="Profile" className="profile-pic" />
          <div>
            <h1>Köksal Dizbay</h1>
            <p className="job-title">Developer</p>
          </div>
        </div>
        <div className="contact-info">
          <p><strong>Email:</strong> koksal.dizbay@kun.edu.tr</p>
          <p><strong>Telefon:</strong> 0543 374 50 51</p>
        </div>
      </header>

      <nav className="nav-menu">
        <a href="#education" className="nav-link">Eğitim</a>
        <a href="#experience" className="nav-link">İş Deneyimi</a>
        <a href="#skills" className="nav-link">Yetenekler</a>
        <a href="#hobbies" className="nav-link">Hobiler</a>
      </nav>

      <section id="education" className="education">
        <h2>Eğitim Bilgileri</h2>
        <p><strong>Üniversite:</strong> Kapadokya Üniversitesi</p>
        <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
        <p><strong>Mezuniyet Yılı:</strong> 2025</p>
      </section>
      
      <section id="experience" className="experience">
        <h2>İş Deneyimi</h2>
        <p><strong>Şirket:</strong> Güvercin Balonculuk</p>
        <p><strong>Pozisyon:</strong> Rezervasyon Departmanı</p>
        <p><strong>Çalışma Süresi:</strong> 4 yıl (2021 - 2024)</p>
      </section>

      <section id="skills" className="skills">
        <h2>Yetenekler</h2>
        <p><strong>Programlama Dilleri:</strong> JavaScript, Python, Java, SQL</p>
        <p><strong>Web Teknolojileri:</strong> React, Node.js, HTML5, CSS3, Sass, Bootstrap</p>
      </section>

      <section id="hobbies" className="hobbies">
        <h2>Hobiler ve İlgi Alanları</h2>
        <p>Futbol, Voleybol, At Binme, Doğa Yürüyüşü</p>
      </section>

      <footer className="social-media">
        <div className="social-media-item">
          <a href="#" target="_self" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <span>LinkedIn</span>
        </div>
        <div className="social-media-item">
          <a href="#" target="_self" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <span>Twitter</span>
        </div>
        <div className="social-media-item">
          <a href="#" target="_self" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <span>Instagram</span>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
