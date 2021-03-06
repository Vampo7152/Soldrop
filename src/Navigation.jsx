import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Navigation() {
  const [show, setShow] = useState(false);
  const history = useHistory();
  return (
    <>
      <div className="navbarr">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              SOLDROP
            </Link>
            <button
              className="navbar-toggler toogle-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation "
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : " "}`}>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 toogle-icon">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/uses">
                    Steps to Use
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" target="_blank">Documentation</a>
                </li>
                <li
                className="nav-item"
              >
                <Link className="nav-link" to="/app">
                Start
                  </Link>
              </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
