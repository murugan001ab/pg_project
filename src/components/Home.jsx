import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import svg from "../assets/svg.svg";

const Header = () => {

   
  return (
    <header className="header">
      <div className="logo">TCEcv</div>
      <nav>
        <ul>
          <li>Resume</li>
          <li>Cover Letter</li>
          <li>Blog</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <div className="auth-buttons">
      <Link to="/login"> <button className="sign-in">Sign In</button> </Link>
        <button className="get-started">Get Started</button>
      </div>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section className="hero">
      <img src={svg} className="svgImage" alt="" />
      <h1>
        Enhancv’s <span className="highlight">Resume Builder</span> <br /> helps you get hired at top <br />companies
      </h1>
      <div className="buttons">
        <button className="build-resume">Build Your Resume</button>
        <button className="resume-score">Get Your Resume Score</button>
      </div>
    </section>
  );
};

const TemplatesSection = () => {
  return (
    <section className="templates">
      <h2>Pick a resume template and build your resume in minutes!</h2>
      <div className="template-list">
        <img src="/assets/template1.png" alt="Template 1" />
        <img src="/assets/template2.png" alt="Template 2" />
        <img src="/assets/template3.png" alt="Template 3" />
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Enhancv. All Rights Reserved.</p>
    </footer>
  );
};

const Home = () => {
  return (
    <div className="home">
      <Header />
      <main className="container">
      <HeroSection />
      <TemplatesSection />
     
      </main>
      <Footer />
    </div>
  );
};

export default Home;