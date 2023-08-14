import React from "react";
import './navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Foodle</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse-navbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav2" href="#">Offer</a>
              </li>
              <li className="nav-item">
                <a className="nav3" href="#">Service</a>
              </li>
              <li className="nav-item">
                <a className="nav4" href="#">Menu</a>
              </li>
              <li className="nav-item">
                <a className="nav5" href="#">About Us</a>
              </li>
               <li className="nav-item">
                  <a className="nav6" href="#">Login</a>
                </li>
                <li className="nav-item">
                  <a className="custom-signup-btn" href="#">Sign Up</a>
                </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;