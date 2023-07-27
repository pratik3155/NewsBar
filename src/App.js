import './App.css';
import React, { useState } from 'react'
import Newscontent from './MyComponents/Newscontent';
import Navbar from './MyComponents/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App = () => {
const pageSize = 6;
const [progress, setProgress] = useState(0)
    return (
      <>
      <div>
   <Router>
        <Navbar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
              <Route exact path="/" element={<Newscontent  setProgress = {setProgress} key="general" pageSize={pageSize} category="general" country="in"/>}></Route>
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
  </>
    )
  
}
export default App
