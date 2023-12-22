import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-link text-light" to="/" onClick={logout}>Logout</Link>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/signin">Signin</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
