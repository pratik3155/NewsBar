import React, { Component } from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg fixed-top bg-secondary ">
          <div className="container-fluid">
            <Link className="navbar-brand  text-light color-light" to="/general">NewsBar </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active  text-light color-light " aria-current="page" to="/general">Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light color-light" to="/business">Business </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light color-light" to="/entertainment">Entertainment </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active  text-light color-light" to="/general">General </Link>
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
              </ul>


            </div>
          </div>
        </nav>
      </div>
    </>
  )

}

export default Navbar