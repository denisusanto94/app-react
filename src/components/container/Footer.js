import React, { Component } from 'react';
import { Route, NavLink, HashRouter, matchPath } from "react-router-dom";
import '../../components/container/Header.css';
import $ from "jquery";

class Footer extends Component {
 state = {
   pathName: []
 }
 

  componentDidMount() {
    var path = window.location.href;

    $(document).ready(function() {
      var pathnames = path.substr(path.lastIndexOf("/#/")+3);
      this.setState({ pathName: pathnames });
    }.bind(this));
    
  }


  render() {
    if(this.state.pathName=='about'){
      return (
        <footer className="footer page-footer font-small blue">
          <div className="footer-copyright text-center py-3">© 2020 Copyright: 
            <a href="#"> Deni Susanto</a>
          </div>
        </footer>
      );
    } else {
        return (
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">© 2020 Copyright: 
            <a href="#"> Deni Susanto</a>
          </div>
        </footer>
      );
    }
    
  }
}
export default Footer;