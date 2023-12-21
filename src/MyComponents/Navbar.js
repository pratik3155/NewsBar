import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; 

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  // Assuming isLoggedIn and logout functions

  const handleNavClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      alert('Please login first');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/general">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/general">Home</Link>
            </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light color-light" to="/health">Health </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light color-light" to="/science">Science </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light color-light" to="/sports">Sports </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light color-light" to="/technology">Technology </Link>
                </li>
                          {isLoggedIn ? (
              <li className="nav-item">
                <button className="nav-link btn btn-link text-light" onClick={logout}>Logout</button>
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
