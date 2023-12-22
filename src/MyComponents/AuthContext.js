import React, { createContext, useState  } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Function to perform user login
  const login = async (email, password) => {
    try {
      // Make an API call to your backend for login
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      // Set user data and authentication status on successful login
      setUser(response.data.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login failure (e.g., display error messages)
    }
  };

  // Function to perform user registration
  const register = async (email, phone, name, password) => {
    try {
      // Make an API call to your backend for user registration
      const response = await axios.post('http://localhost:5000/register', {
        email,
        phone,
        name,
        password,
      });

      // Set user data and authentication status on successful registration
      setUser(response.data.user);
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error during registration:', error);
      // Handle registration failure (e.g., display error messages)
    }
  };

  // Function to perform user logout
  const logout = () => {
    // Clear user data and set authentication status to false
    setUser(null);
    setIsLoggedIn(false);
    
    
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
