import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Scenes/Home';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
);

export default BasicExample;
