import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [count , setCount] = useState(0);
  
  const increment = () => {
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }


  return (
    <Router>
      <div>
      <span className="title">My counter</span>
      <p className="subTitle">My count is {count}</p>
      <button onClick={decrement} className="button">-</button>
      <button onClick={increment} className="button">+</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

    
  );
}

export default App;

