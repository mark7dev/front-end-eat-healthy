import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import request from 'superagent';
import './styles/SignUp.css';

import {
  // TextField,
  Button,
  // Snackbar
} from '@material-ui/core';

import { withRouter } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import signupImage from '../images/signup.jpeg';


// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit*5,
//     marginRight: theme.spacing.unit*5,
//     background: 'red',
//     color: 'white',
//   },
//   dense: {
//     marginTop: 16,
//   },
//   menu: {
//     width: 200,
//   },
// });



class SignUp extends Component {

  constructor () {
    super();

    this.state = {}
  }

  handleChange = e => {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    
    e.preventDefault();
    
    request
    // .post('http://localhost:3000/apieh/v1/auth/signup')
    .post('https://boiling-peak-27661.herokuapp.com/apieh/v1/auth/signup')
    .set({
      'Content-Type': 'application/json'
    })
    .send(this.state)
    .then(response => {
      if (response.ok){
        this.props.history.push('/')
      }
      // if (response.ok === 'false')
      
    })
    .catch(error=> console.error(error));
    
  }


    render() {

      console.log(this.state);

      // const formStyles = {
      //     width: 500,
      //     // margin: '50px auto',
      //     display: 'flex',
      //     flexWrap: 'wrap',
      //     color: 'red',

      // };

      const formStyles2 = {
        display: 'flex',
        flexWrap: 'wrap',
        
      }

      const textField = {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
      }
    
      const buttonStyle = {
        marginTop: 30,
        background: '#AFB42B',
        color:'white',
      }
  
      // const { redirectToReferrer } = this.state;
      // const { from } = this.props.location.state || { from: { pathname: '/' } }
  
      // if (redirectToReferrer) {
      //   return (
      //     <Redirect to={ from } />
      //   )
      // }
    
      return (
        <div className='signup__body'>
          <div className='signup__container'>
            <div className='signup__image__container'>
              <img src={ signupImage } alt=''></img>
            </div>
            <div className='signup__form__container'>
              <div className='signup__text__container'>
                <h1>Sign Up</h1>
              </div>
              <div style={ formStyles2 }>
                <form onSubmit={ this.onSubmit }>
                  <TextField style={ textField }
                    required
                    label="Date of register"
                    name="dateRegister"
                    variant="outlined"
                    fullWidth
                    placeholder="YYYY-MM-DD  Example: 2018-10-25"
                    onChange={ this.handleChange }
                  />
                  <TextField style={ textField }
                    required
                    label="Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <TextField style={ textField }
                    required
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <TextField style={ textField }
                    required
                    label="Age"
                    type="number"
                    name="age"
                    variant="outlined"
                    onChange={ this.handleChange }
                  />
                  <TextField style={ textField }
                    required
                    label="Gender"
                    name="gender"
                    variant="outlined"
                    placeholder="male or female"
                    onChange={ this.handleChange }
                  />
                  <TextField style={ textField }
                    required
                    label="Company"
                    name="company"
                    variant="outlined"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <TextField style={ textField }
                    required
                    label="Telephone Number"
                    name="telephone"
                    variant="outlined"
                    onChange={ this.handleChange }
                  />
                  <TextField style={ textField }
                    required
                    label="Email"
                    type="email"
                    name="email"
                    variant="outlined"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <TextField style={ textField }
                    required
                    label="Password"
                    type="password"
                    name="password"
                    variant="outlined"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <div className='button_signup__container'>
                    <Button type='submit' style={ buttonStyle } variant='contained'>Sign Up</Button>
                  </div>
                </form>
              </div>
              {/* <div style={ formStyles }>
                <form onSubmit={ this.onSubmit }>
                  <TextField
                    required
                    name="dateRegister"
                    label="Date of register"
                    fullWidth
                    placeholder="YYYY-MM-DD  Example: 2018-10-25"
                    onChange={ this.handleChange }
                  />
                  <TextField
                    required
                    name="name"
                    label="Name"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <TextField
                    required
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <TextField
                    required
                    name="age"
                    type="number"
                    label="Age"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <TextField
                    required
                    name="gender"
                    label="Gender"
                    fullWidth
                    placeholder="male or female"
                    onChange={ this.handleChange }
                  />
                  <TextField
                    required
                    name="company"
                    label="Company"
                    fullWidth
                    onChange={ this.handleChange }
                  />              
                  <TextField
                    required
                    name="telephone"
                    label="Telephone Number"
                    fullWidth
                    onChange={ this.handleChange }
                  />
                  <TextField
                    required
                    name="email"
                    type="email"
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
                  <Button type='submit' style={ buttonStyle } variant='contained'>SignUp</Button>
                </form> */}
        
                  {/* <Snackbar
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
                    message={<span id="message-id">SignUp failed</span>}
                  /> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      );
    }
}

export default withRouter(SignUp);