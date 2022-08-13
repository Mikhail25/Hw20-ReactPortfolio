import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Header Part */}
      
      {/* Container Part */}
      <Router>
      <Header />
        <Routes>
            <Route 
              path="/"
              element={<AboutMe />}
            />
            <Route 
              path="/portfolio"
              element={<Portfolio />}
            />
            <Route 
              path="/contact"
              element={<Contact />}
            />
            <Route 
              path="/resume"
              element={<Resume />}
            />
        </Routes>
      <Footer/>  
      </Router>
    </div>
  );
}

export default App;
