import React, { Component } from 'react';
// import Logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import './styles/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='footer'>
                    {/* <div className='logo'>
                        <Link to='/'><img src={ Logo } alt=''></img></Link> 
                    </div>
                    <hr id='hr__footer'></hr> */}
                    <div className='footer__container__menus'>
                        <ul className='footer__menu'>
                            Access
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>Sign Up</Link></li>
                        </ul>
                        <ul className='footer__menu'>
                            Profiles
                            <li><Link to='/patient'>Patient</Link></li>
                            <li><Link to='/nutritionist'>Nutritionist</Link></li>
                        </ul>
                        <ul className='footer__menu'>
                            Information
                            <li><Link to='/plans'>Nutrition Plans</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                        <ul className='footer__social'>
                            Social
                            <br></br>
                            <li id='social'>
                                <a href=''>
                                    <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li id='social'>
                                <a href=''>
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li id='social'>
                                <a href=''>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Footer;