import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function App() {
  /*const [count , setCount] = useState(0);
  
  const increment = () => {
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }*/
  function btnClick (){
    console.log("Button is clicked!");
    alert("button is clicked!")
  }
  return (

  
  <div>
  
  <h1>React Event Handling</h1>
    <br></br><hr></hr>
    <button onClick={btnClick}>Click Here</button>
  </div>
  );
}

export default App;
