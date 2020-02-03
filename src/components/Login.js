import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import axios from 'axios';
import './Home';
import AuthService from '../service/AuthService';

class Login extends Component {

  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: '',
        message: '',
    }
    this.login = this.login.bind(this);
  }

  login = (e) => {
    e.preventDefault();
    const credentials = {email: this.state.email, password: this.state.password};
    AuthService.login(credentials).then(res => {
        if(res.status === 200){
            localStorage.setItem("userInfo", JSON.stringify(res.data.success));
            this.props.history.push('/');
            console.log("success")
        }else {
            console.log("gagal")
        }
    });
  };

  onChange = (e) =>
  this.setState({ [e.target.name]: e.target.value });
  
  render() {
    return (
      <HashRouter>
      <div className="home">
        <div className="container">
          <div className="card"> 
            <div className="row">
              <div className="col-sm-12">
                <form>
                  <div className="form-group login">
                      <label >Email address</label>
                      <input type="email" className="form-control"  name="email"  value={this.state.email}  onChange={this.onChange} aria-describedby="emailHelp" placeholder="Enter email"></input>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group login">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password"  value={this.state.password}  onChange={this.onChange} placeholder="Password"></input>
                  </div>
                  <button type="submit" onClick={this.login} className="btn btn-primary float-right btnLogin">Submit</button>
                  <div className="form-group login">
                      <NavLink to="/register">Create Account</NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </HashRouter>
    );
  }
}
export default Login;