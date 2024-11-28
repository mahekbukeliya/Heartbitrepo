// src/pages/HomePage.js

import React, { useEffect } from 'react';
import './HomePage.css'; // Import the CSS

const HomePage = () => {
  useEffect(() => {
    // JavaScript from script.js
    const contactItems = document.querySelectorAll(".contact-item");

    contactItems.forEach(item => {
      item.addEventListener("mouseenter", () => {
        item.style.transition = "all 0.5s ease";
        item.style.transform = "scale(1.05)";
      });

      item.addEventListener("mouseleave", () => {
        item.style.transition = "all 0.5s ease";
        item.style.transform = "scale(1)";
      });
    });

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu-links a");

    function updateActiveLink() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
  }, []);

  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo-name">
            <img src="logo.png" alt="HeartBit Logo" className="logo" />
            <img src="heartbit.png" alt="HeartBit Name" className="website-name" />
          </div>
          <ul className="menu-links">
            <li><a href="#home" id="home-link">Home</a></li>
            <li><a href="#about-us" id="about-us-link">About Us</a></li>
            <li><a href="#contact-us" id="contact-us-link">Contact Us</a></li>
            <li><a href="/login" className="cta-button">LOGIN</a></li>
          </ul>
        </nav>
      </header>
      <div id="home" className="hero-section">
        <div className="hero-content">
          <h1>Empowering</h1>
          <h1>Heart Health </h1>
          <h1>with AI</h1>
          <a href="/login" className="get-started-button">Get Started</a>
        </div>
      </div>
      <section id="about-us" className="about-us">
        <div className="about-content1">
          <h2>About Us</h2>
          <p>
            Welcome to HeartBit, where we leverage cutting-edge AI technology to provide insights into heart health. Our system is designed to predict and analyze heart disease risks based on user health data.
          </p>
        </div>
        <div className="about-content">
          <div className="features">
            <div className="feature">
              <div className="circle">
                <img src="prediction.png" alt="Accurate Prediction Icon" />
              </div>
              <p>Accurate Prediction</p>
            </div>
            <div className="feature">
              <div className="circle">
                <img src="privacy.png" alt="Data Privacy Icon" />
              </div>
              <p>Data Privacy</p>
            </div>
            <div className="feature">
              <div className="circle">
                <img src="ui.png" alt="User Friendly Interface Icon" />
              </div>
              <p>User Friendly Interface</p>
            </div>
            <div className="feature">
              <div className="circle">
                <img src="analysis.png" alt="Insightful Analysis Icon" />
              </div>
              <p>Insightful Analysis</p>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <div className="container">
          <h2>How HeartBit Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-content">
                <div className="step-icon">1</div>
                <div className="step-text"><h4>Enter Your Health Data</h4></div>
              </div>
            </div>
            <div className="step">
              <div className="step-content">
                <div className="step-icon">2</div>
                <div className="step-text"><h4>AI Processes Your Data</h4></div>
              </div>
            </div>
            <div className="step">
              <div className="step-content">
                <div className="step-icon">3</div>
                <div className="step-text"><h4>Receive Heart Health Prediction</h4></div>
              </div>
            </div>
            <div className="step">
              <div className="step-content">
                <div className="step-icon">4</div>
                <div className="step-text"><h4>Get Personalized Insights</h4></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Take Control of Your Heart Health?</h2>
          <a href="/login" className="cta-button">Join HeartBit Today</a>
        </div>
      </section>
      <section id="contact-us" className="contact-us">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="contact-item" id="email-item">
              <h3>Email</h3>
              <p>contact@heartbit.com</p>
            </div>
            <div className="contact-item" id="phone-item">
              <h3>Phone</h3>
              <p>+123 456 7890</p>
            </div>
            <div className="contact-item" id="address-item">
              <h3>Address</h3>
              <p>123 Heart St, Healthy City, Healthland</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
