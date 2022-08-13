import React from 'react';
import './styles/reset.css';

function Header(){
    return (
    // <header className="header">
    //     <h1>Mikhail Sookwah's Portfolio</h1>
    //     <nav>
    //         <ul className="nav">
    //             <li><a href="#about-me">About Me</a></li>
    //             <li><a href="#my-work">My Work </a></li>
    //             <li><a href="#contact">Contact</a></li>
                
    //         </ul>
    //     </nav>
    // </header>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 ms-3 h1">Mikhail R Sookwah</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end me-5" id="navbarNavAltMarkup">
      <div className="navbar-nav d-flex justify-content-around">
        
        <a className="nav-link" href="/">About Me</a>
        <a className="nav-link" href="/portfolio">Portfolio</a>
        <a className="nav-link" href="/contact">Contact</a>
        <a className="nav-link" href="/resume">Resume</a>

      </div>
    </div>
  </div>
</nav>
    );
}

export default Header;