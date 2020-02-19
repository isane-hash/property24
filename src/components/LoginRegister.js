import React, { Component } from "react";
import { User } from "zaio-property24-api/api/User";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      fullname: "",
      isLogin: true,
      errors: [],
      message: ""
    };
  }

  setIsLogin = bool => {
    this.setState({
      isLogin: bool
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.isLogin) {
      const { username, password } = this.state;
      new User(username, password)
        .login()
        .then(res => {
          console.log(res);
          if (res.error) {
            this.setState({
              errors: [res.error]
            });
          } else {
            //redirect to /
            document.location.pathname = "/";
          }
        })
        .catch(err => {
          this.setState({
            errors: [err.message]
          });
        });
    } else {
      const { username, password, email, fullname } = this.state;
      new User(username, password, fullname, email)
        .signup()
        .then(res => {
          if (res.error) {
            this.setState({
              errors: [res.error]
            });
          } else {
            this.setState({
              message: "Your account has been created.",
              isLogin: true
            });
          }
        })
        .catch(err => {
          this.setState({
            errors: [err.message]
          });
        });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let errorNotification =
      this.state.errors.length > 0 ? (
        <div className="Error">{this.state.errors}</div>
      ) : (
        <></>
      );

    let messageNotification = this.state.message ? (
      <div className="info">{this.state.message}</div>
    ) : (
      <></>
    );

    const formTitle = this.state.isLogin ? "Login" : "Sign up";

    const loginOnlySection = this.state.isLogin ? (
      <div>
        <button onClick={() => this.setIsLogin(false)}>New? Signup!</button>
      </div>
    ) : (
      <></>
    );

    //only show when isLogin = false
    const signupOnlySection = this.state.isLogin ? (
      <></>
    ) : (
      <div>
        Already registered?
        <button onClick={() => this.setIsLogin(true)}>login!</button>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        ></input>
        <label htmlFor="email">Full name</label>
        <input
          type="text"
          name="fullname"
          value={this.state.fullname}
          onChange={this.handleChange}
        ></input>
      </div>
    );

    return (
      <div className="form_block">
        <div id="title">{formTitle}</div>
        <div className="body">
          {errorNotification}
          {messageNotification}

          <form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
              name="username"
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              name="password"
            />

            {loginOnlySection}

            {signupOnlySection}

            <input
              type="submit"
              value={formTitle}
              onClick={this.handleFormSubmit}
            ></input>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
