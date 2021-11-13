import React, { useState } from "react";
import {Link} from "react-router-dom";

function Navigation() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="navbarr">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container">
            <Link class="navbar-brand" to="/">
              SOLDROP
            </Link>
            <button
              class="navbar-toggler toogle-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation "
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : " "}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 toogle-icon">
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/uses">
                    Uses
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <button class="btn btn-outline-success btn-styl" type="submit">
                Start
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
