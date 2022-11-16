import "./App.css";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Bikes from "./components/Bikes";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Nav/>
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bikes" element={<Bikes/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;