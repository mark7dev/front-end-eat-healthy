import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import nutritionistImage from '../images/nutritionist.jpg'
import './styles/Nutritionist.css';
// import { TextField } from '@material-ui/core';
import request from 'superagent';

class Nutritionist extends Component {

    constructor () {
        super();
    
        this.state = {
            email: ""
        }
      }
    
      searchingEmail = () => {
        request
        // .get(`http://localhost:3000/apieh/v1/users/${ this.state.email }`)
        .get(`https://boiling-peak-27661.herokuapp.com/apieh/v1/users/${ this.state.email }`)
        .then (response => {
            // const lleno = response.body.user;
            //     console.log(lleno.length)
            if (response.body.user.length >0){
                localStorage.setItem('email',response.body.user[0].email)
                this.props.history.push('/nutritionist/consulting')
            } else {
                alert ('mail not found')
            }

        })
      }


      handleChange = e => {
        this.setState ({
          [e.target.name]: e.target.value
        })
      }
    
      onSubmit = e => {
        e.preventDefault();
        this.searchingEmail();

        
        // this.setState({
        //     email: this.state.email
        // })

        
        
        
      }

    render() {
        // console.log(this.state);
        return (
            <div>
                <div className='nutritionist__container'>
                    <div className='nutritionist__text__container'>
                        <h1>Welcome! Thanks for helping people change their lives</h1>
                        <h2>What is the email of the patient?</h2>
                    </div>
                    <div className='middle__container'>
                        <div className='elements__search__container'>
                            <div className='icon__search__container'>
                              <i class="fa fa-envelope" aria-hidden="true"></i>
                            </div>
                            <form onSubmit={this.onSubmit} className='searchPatient'>
                                <div className='input__search__container'>
                                    <input 
                                        className="input__search"
                                        type="text" 
                                        onChange={ this.handleChange } 
                                        name="email"
                                        required/>
                                </div>
                                <div className='button__search__container'>
                                    {/* <Link to= { `/nutritionist/consulting/${ this.state.email }` }> */}
                                        <button type='submit'>Search</button>
                                    {/* </Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='last__container'>
                      <img src= { nutritionistImage } alt=''></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nutritionist;