import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Scenes/Home';
import AdminAlert from './Scenes/AdminAlert';
import DetailAlert from './Scenes/DetailAlert';
import LoginUser from './Scenes/LoginUser';

const BasicExample = () => (
  <Router>
    <div> 
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={AdminAlert} />
      <Route path="/details" component={DetailAlert} />      
      <Route path="/login" component={LoginUser} />      
      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
);
  
export default BasicExample;
