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
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<Signin />} />
            
            <Route path='/newscontent' element={<Newscontent pageSize={6} />} />
            <Route exact path="/business" element={<Newscontent  setProgress = {setProgress} key="business" pageSize={pageSize} category="business" country="in"/>}></Route>
            <Route exact path="/entertainment" element={<Newscontent  setProgress = {setProgress} key="entertainment" pageSize={pageSize} category="entertainment" country="in"/>}></Route>
            <Route exact path="/general" element={<Newscontent  setProgress = {setProgress} key="general" pageSize={pageSize} category="general" country="in"/>}></Route>
            <Route exact path="/health" element={<Newscontent  setProgress = {setProgress} key="health" pageSize={pageSize} category="health" country="in"/>}></Route>
            <Route exact path="/science" element={<Newscontent  setProgress = {setProgress} key="science" pageSize={pageSize} category="science" country="in"/>}></Route>
            <Route exact path="/sports" element={<Newscontent  setProgress = {setProgress} key="sports" pageSize={pageSize} category="sports" country="in"/>}></Route>
            <Route exact path="/technology" element={<Newscontent  setProgress = {setProgress} key="technology" pageSize={pageSize} category="technology" country="in"/>}></Route>
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
