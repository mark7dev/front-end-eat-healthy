import React, { Component } from 'react';

import {
  TextField,
  Button,
  Snackbar
} from '@material-ui/core';

import AuthService from '../Utils/AuthService';

import { Redirect } from 'react-router-dom';
import loginImage from '../images/login.jpg';
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
      marginTop: 30
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
          <div classNane='login__container' style={ formStyles }>
            <form onSubmit={ this.login }>
              <TextField
                required
                name="email"
                label="Email"
                fullWidth
                onChange={ this.handleChange }
              />
              <TextField
                required
                name="password"
                type="password"
                label="Password"
                fullWidth
                onChange={ this.handleChange }
              />
              <Button type='submit' style={ buttonStyle } variant='contained'>Login</Button>
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
