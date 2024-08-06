import logo from './logo.svg';
import './App.css';
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function App() {
  return (

    <div className="App">

      <h1>Hi, my name is Xiuwen!</h1>
      <h2>I'm currently a senior at Brooklyn College double majoring in computer science and computational math.</h2>   
      <a href="https://drive.google.com/file/d/1e7OJe7RlY1s5UqGB3fZs9RLgD-X90K7V/view?usp=sharing" target="_blank" rel="noopener noreferrer" style ={{fontSize: '30px'}}>
        Feel free to check out my resume!
      </a>
      <br></br>
      <br></br>
      <a href="https://www.linkedin.com/in/xiuwenzhu/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin size = {40} color="#0e76a8" />
      </a>

      <a href="https://https://github.com/XiuwenZ" target="_blank" rel="noopener noreferrer">
      <FaGithub size = {40} color="#333"/>
      </a>

    </div>

  );
}

export default App;
