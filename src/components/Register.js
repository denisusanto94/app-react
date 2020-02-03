import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import axios from 'axios';
import './Home';
import AuthService from '../service/AuthService';

class Register extends Component {

  constructor(props){
    super(props);
    this.state = {
        name: '',
        email: '',
        password: '',
        c_password: '',
        message: '',
    }
    this.register = this.register.bind(this);
  }

  register = (e) => {
    e.preventDefault();
    const credentials = {name: this.state.name, email: this.state.email, password: this.state.password, c_password: this.state.c_password};
    AuthService.register(credentials).then(res => {
      console.log(res)
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
                      <label >username</label>
                      <input type="text" className="form-control"  name="name"  value={this.state.name}  onChange={this.onChange}  placeholder="Username"></input>
                      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group login">
                      <label>Email address</label>
                      <input type="email" className="form-control" name="email"  value={this.state.email}  onChange={this.onChange} placeholder="Enter email"></input>
                  </div>
                  <div className="form-group login">
                      <label>Password</label>
                      <input type="password" className="form-control" name="password"  value={this.state.password}  onChange={this.onChange} placeholder="Password"></input>
                  </div>
                  <div className="form-group login">
                      <label>Confirm Password</label>
                      <input type="password" className="form-control" name="c_password"  value={this.state.c_password}  onChange={this.onChange} placeholder="Confirm Password"></input>
                  </div>
                  <button type="submit" onClick={this.register} className="btn btn-primary float-right btnLogin">Submit</button>
                  <div className="form-group login">
                      <NavLink to="/login">Back to Login</NavLink>
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
export default Register;