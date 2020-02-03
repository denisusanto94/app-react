import React, { Component } from 'react';
import axios from 'axios';
import '../components/Style.css';

const API_URL = 'http://api.themunilab.com';

class Contents extends Component {
  state = {
    users: [],
    users2: [],
    users3: []
  }


  componentDidMount() {
    const url = `${API_URL}/api/management/getDataKomik/12`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
     });

     const url2 = `${API_URL}/api/management/getDataKomik/13`;
     axios.get(url2).then(response => response.data)
     .then((data2) => {
      this.setState({ users2: data2 })
      this.users2 = data2;
      });

      const url3 = `${API_URL}/api/management/getDataKomik/14`;
      axios.get(url3).then(response => response.data)
      .then((data3) => {
       this.setState({ users3: data3 })
       this.users3 = data3;
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
                <span className="readMore">SEE ALL FEATURED</span>
              </div>
            </div>
          </div>
          <hr/>
        </div>
      
    
        <div className="container">
          <div className="row contentStyle">
            <div className="col-sm-8 " >
            <div className="titleContent">
            <b >Hot Topic</b>
            </div>
              {this.state.users2.map((users2) => (
              <div className="row  contentPopular"  key={users2.id}>
                <div className="col-7">
                  <div className="p" >
                    <b>
                      {users2.chapter}
                    </b>
                    <p className="text">
                        {users2.page}
                    </p>
                  </div>
                </div>
                <div className="col-5">
                  <img src={users2.imagePath} className="imagePopular"></img>
                </div>
              </div>
              ))}
            </div>
           
            <div className="col">
            <div className="titleContent">
            <b >Trending</b>
            </div>
            <div className="sticky-top"> 
            {this.state.users3.map((users3) => (
              <ul key={users3.id}>
                <li>
                  <b>
                    {users3.chapter}
                  </b>
                  <p className="p">
                        {users3.page}
                  </p>
                </li>
              </ul>
             ))}
            </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default Contents;