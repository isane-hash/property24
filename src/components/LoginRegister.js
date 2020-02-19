import React, {Component} from 'react';
import axios from 'axios';


class Login extends Component {

    constructor(props){
        super(props);
        this.state ={
            email: "",
            password: "",
            firebaese: "",
            formTitle: 'Login',
            loginBtn: true

        };

    }

    
    login = e => {
        e.preventDefault();
        axios.post('https://zaio-property24-api.herokuapp.com/login', {
            username: this.state.email,
            password: this.state.password,
          })
          .then(function (response) {
            console.log('yay it worked',response);
          })
          .catch(function (error) {
            console.log('got an error',error);
          });
    }

    register = e => {
        console.log('trigger api call here')
        e.preventDefault();
        axios.post('https://zaio-property24-api.herokuapp.com/user', {
            username: this.state.email,
            password: this.state.password,
          })
          .then(function (response) {
            console.log('yay it worked',response);
          })
          .catch(function (error) {
            console.log('got an error',error);
          });
    
        // fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        // .catch((error) => {
        //     this.setState({fireErrors: error.message})
        // });
    }

    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''});
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = this.state.loginBtn ? 
            (<input className="loginBtn" type="submit" onClick={this.login} value="Enter" />) : 
            (<input className="loginBtn" type="submit" onClick={this.register} value="Register" />);

        let login_register = this.state.loginBtn ?
            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Create account</button>) : 
            (<button className="registerBtn" onClick={() => this.getAction('login')}>Have an account?</button>)

        return(
            <div className="form_block">
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
                    <form>
                        <label for="male">Email Address</label>
                        <input type="text" 
                        value={this.state.email} 
                        onChange={this.handleChange} 
                        name="email" />

                        <label for="male">Password</label>
                        <input type="password" 
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" />

                        {submitBtn}
                    </form>
                    {login_register}
                </div>
            </div>
        )
    }
}

export default Login;