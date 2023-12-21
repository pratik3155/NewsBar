import React, { useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your CSS file for Home.js

const Home = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="home-container">
      <h1>Welcome to News App</h1>
      <div className="home-content">
        {isLoggedIn ? (
          <p>You are logged in. View news content <Link to='/'>here</Link></p>
        ) : (
          <div className="home-options">
            <p>Please select an option:</p>
            <div className="button-group">
              <Link to='/login' className="button">Login</Link>
              <Link to='/signin' className="button">Sign In</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
