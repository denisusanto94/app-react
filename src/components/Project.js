import React, { Component } from 'react';
import axios from 'axios';
import '../components/Style.css';

const API_URL = 'http://api.themunilab.com';

class Project extends Component {
  state = {
    users: [],
    users2: [],
    users3: []
  }


  componentDidMount() {
    const url = `${API_URL}/api/management/getDataKomik/15`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
     });

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
         <div className="titleContent">
            <b >Project Handler</b>
          </div>
          <div className="row"> 
            {this.state.users.map((user) => (
              <div className="col-sm-4" key={user.id}>
                 <img src={user.imagePath} className="imageHome"></img>
                <div className="content">
                <b>
                    {user.chapter}
                </b>
                <p className="p">
                    {user.page}
                </p>
                </div>
              </div>
            ))}
            <div className="col-sm-12">
              <div className="float-md-right">
                <span className="readMore">SEE ALL PROJECT</span>
              </div>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}
export default Project;