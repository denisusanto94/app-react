import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import '../../components/container/Header.css';

class Header extends Component {
    constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    this.setState({ menu: !this.state.menu })
  }
  render() {
    const show = (this.state.menu) ? "show" : "" ;
    return (
      <HashRouter>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bgcolor fixed-top">
          <a className="navbar-brand"><b>DEN</b>/<i>id</i></a>
          <button className="navbar-toggler" type="button" onClick={ this.toggleMenu } data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse " + show} id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                 <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink> 
              </li>
              <li className="nav-item">
                 <NavLink className="nav-link" to="/project">Project</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
            </ul>
            <span className="navbar-text">
            {/* <NavLink to="/login">Login</NavLink> */}
            </span>
          </div>
        </nav>
      </div>
      </HashRouter>
    );
  }
}
export default Header;