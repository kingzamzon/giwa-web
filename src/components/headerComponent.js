import React from "react";
import { Link } from "react-router-dom";

export default class HeaderComponent extends React.Component {
  render() {
    return (
      <header className="header_area clearfix">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <div className="col-12 h-100">
              <div className="menu_area h-100">
                <nav className="navbar h-100 navbar-expand-lg align-items-center">
                  <a className="navbar-brand" href="index.html">
                    <span>
                      <i className="fa fa-tree"></i> Savvy Inc.
                    </span>
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#mosh-navbar"
                    aria-controls="mosh-navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="mosh-navbar"
                  >
                    <ul className="navbar-nav animated" id="nav">
                      <li className="nav-item active">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/aboutus" className="nav-link">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/services" className="nav-link">
                          Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/portfolio" className="nav-link">
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/careers" className="nav-link">
                          Careers
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/blog" className="nav-link">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <div className="search-form-area animated">
                      <form action="#" method="post">
                        <input
                          type="search"
                          name="search"
                          id="search"
                          placeholder="Type keywords &amp; hit enter"
                        />
                        <button type="submit" className="d-none">
                          <img
                            src="img/core-img/search-icon.png"
                            alt="Search"
                          />
                        </button>
                      </form>
                    </div>
                    <div className="search-button">
                      <a href="#" id="search-btn">
                        <img src="img/core-img/search-icon.png" alt="Search" />
                      </a>
                    </div>
                    <div className="login-register-btn">
                      <a href="#">Login</a>
                      <span> / </span>
                      <a href="#"> Register</a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
