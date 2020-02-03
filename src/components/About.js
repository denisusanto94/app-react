import React, { Component } from 'react';
import axios from 'axios';
import '../components/Style.css';

class Project extends Component {

  componentDidMount() {
    if( window.localStorage ){
      if( !localStorage.getItem( 'firstLoad' ) ){
          localStorage[ 'firstLoad' ] = true;
          window.location.reload();
        } else
          localStorage.removeItem( 'firstLoad' );
    }   
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="titleAbout">
            <b>More Information</b> <br/>
            <p className="contactMe">Contact Me Below</p>  
            <div className="row">
              <div className="col">
                <span><a href="mailto:denisusanto94@gmail.com"><i className="fa fa-envelope" aria-hidden="true">&nbsp;</i><b className="about-me">Email</b></a></span>
              </div>
              <div className="col">
                <span><a href="https://github.com/denisusanto94"><i className="fa fa-github"aria-hidden="true">&nbsp;</i><b className="about-me">Github</b></a></span>
              </div>
              <div className="col">
                <span><a href="https://wa.me/6282114902056"><i className="fa fa-whatsapp"aria-hidden="true">&nbsp;</i><b className="about-me">Whatsapp</b></a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project;