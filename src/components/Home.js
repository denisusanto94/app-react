import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import '../components/Style.css';
import Contents from './Contents';
import Project from './Project';
import About from './About';
import Login from './Login';
import Register from './Register';

class Home extends Component {
  render() {
    return (
      <HashRouter>
      <div className="home">
      <Route exact path="/" component={Contents}/>
      <Route exact path="/home" component={Contents}/>
      <Route exact path="/project" component={Project}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      </div>
      </HashRouter>
    );
  }
}
export default Home;