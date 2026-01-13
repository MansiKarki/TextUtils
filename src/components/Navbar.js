import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Navbar(props) {

  // 🔁 Toggle Mode Function
  const toggleMode = () => {
    if (props.mode === 'light') {
      props.setMode('dark');
    } else {
      props.setMode('light');
    }
  }

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
      }`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>

          {/* 🔄 Dark / Light Toggle Switch */}
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} me-3`}>
            <input
              className="form-check-input"
              type="checkbox"
              onClick={toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            </label>
          </div>

        
        </div>
      </div>
    </nav>
  )
}
