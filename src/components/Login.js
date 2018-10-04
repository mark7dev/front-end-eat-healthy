import React, { Component } from 'react';

import {
  TextField,
  Button,
  Snackbar
} from '@material-ui/core';

import AuthService from '../Utils/AuthService';

import { Redirect } from 'react-router-dom';
import loginImage from '../images/login.jpeg';
import './styles/Login.css';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false,
      onLoginError: false
    }
  }

  login = e => {
    e.preventDefault();

    const credentials = {
      email: this.state.email,
      password: this.state.password
    };

    AuthService
      .authenticate(credentials, () => {
        this.setState(() => ({
          redirectToReferrer: true
        }));
      }, () => {
        this.setState({
          onLoginError: true
        });
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClose = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    this.setState({ onLoginError: false });
  };

  render() {
    const formStyles = {
      width: 400,
      margin: '50px auto',
    };

    const buttonStyle = {
      marginTop: 30,
      background: '#AFB42B',
      color:'white',
    }

    const textField = {
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
    }

    const { redirectToReferrer } = this.state;
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToReferrer) {
      return (
        <Redirect to={ from } />
      )
    }

    return (
      <div>
        <div className='imageLogin__container'>
          <img src={ loginImage } alt=''></img>
          <div className='login__container' style={ formStyles }>
            <form onSubmit={ this.login }>
              <TextField style={ textField }
                required
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                onChange={ this.handleChange }
              />
              <TextField style={ textField }
                required
                name="password"
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                onChange={ this.handleChange }
              />
              <div className='button__login__container'>
                <Button type='submit' style={ buttonStyle } variant='contained'>Log In</Button>
              </div>            
            </form>

              <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={ this.state.onLoginError }
                autoHideDuration={ 2000 }
                onClose={ this.handleClose }
                ContentProps={{
                  'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Authentication failed</span>}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
