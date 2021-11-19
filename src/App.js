import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Uses from "./Uses";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AirDrop from "./AirDrop";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/uses" component={Uses} />
        <Route path="/app" component={AirDrop} />

        {/* redirect to "/" if route not exist */}
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
