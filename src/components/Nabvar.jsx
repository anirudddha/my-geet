import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'; // Import your custom CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link" activeClassName="active">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ourProcess" className="nav-link" activeClassName="active">Our Process</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu">
                <li><NavLink to="/price" className="dropdown-item" activeClassName="active">Pricing</NavLink></li>
                <li><NavLink to="/contact" className="dropdown-item" activeClassName="active">Contact Us</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Newsletter</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
