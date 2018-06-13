import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Scenes/Home';
import AdminAlert from './Scenes/AdminAlert';
import DetailAlert from './Scenes/DetailAlert';

const BasicExample = () => (
  <Router>
    <div> 
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={AdminAlert} />
      <Route path="/details" component={DetailAlert} />      
      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
);
  
export default BasicExample;
