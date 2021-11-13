import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "./Home";
import Uses from "./Uses";
import Navigation from "./Navigation";
import About from "./About"

function App() {
  return (
    <Router>
       < Navigation />
      <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/uses" component={Uses} />
          <Route path="/about" component={About} />
          </Routes>
    </Router>
  );
}

export default App;
