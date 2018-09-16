import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
      
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Pages</h4>
              <ul className="list-unstyled">
                <li><Link to="/" className="nav-item r-item">Home</Link></li>
                <li><Link to="/Faq" className="nav-item r-item">FAQ</Link></li>
                <li><Link to="/Content" className="nav-item r-item">Content</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
