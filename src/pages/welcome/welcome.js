import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div className="App">
      <div className="App-wrap">
        <div className="App-logo">
          <img className="App-logo-img" alt="大智" src={require("./images/logo.png")} />
        </div>
        <div className="App-wrap-des">→ 欢迎使用医大智能设备 ←</div>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Welcome;
