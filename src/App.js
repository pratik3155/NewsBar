import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './MyComponents/AuthContext';
import Navbar from './MyComponents/Navbar';
import LoadingBar from 'react-top-loading-bar';
import Newscontent from './MyComponents/Newscontent';
import Home from './MyComponents/Pages/Home';
import Login from './MyComponents/Pages/Login';
import Signin from './MyComponents/Pages/Signin';

const App = (props) => {
  const pageSize = 6;
  const setProgress = props.setProgress
  
    return (
      <AuthProvider>
        <div>
          <Router>
            <Navbar />
            <LoadingBar height={3} color='#f11946' progress={0} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signin' element={<Signin />} />
              <Route path='/newscontent' element={<Newscontent setProgress={setProgress} />} />
            </Routes>
          </Router>
        </div>
      </AuthProvider>
    );
  };
  
  export default App;