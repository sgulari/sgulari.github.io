import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="nav-logo">
          <Link to="/">SG.</Link>
        </div>
        <ul className="nav-links">
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary" style={{padding: '8px 16px', fontSize: '0.9rem'}}>Contact</a></li>
          <li>
            <Link to="/terminal" className="terminal-toggle" title="Hacker Mode">
              <Terminal size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
