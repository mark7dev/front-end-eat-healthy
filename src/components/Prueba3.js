import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import nutritionistImage from '../images/nutritionist.jpg'
import './styles/Prueba3.css';

class Prueba3 extends Component {
    render() {
        return (
            <div>
                <div className='nutritionist__container'>
                    <div className='nutritionist__text__container'>
                        <h1>Welcome! Thanks for helping people change their lives</h1>
                        <h2>Please select...</h2>
                    </div>
                    <div className='middle__container'>
                        <div className='buttons__container'>
                            <div className='button1__container'>
                                <Link to='/nutritionist/consulting'>
                                    <button>Consulting</button>
                                </Link>
                            </div>
                            <div className='button2_container'>
                                <Link to='/nutritionist/record'>
                                    <button>Record</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='last__container'>
                        {/* <div className='nutritionist__image__container'> */}
                            <img src= { nutritionistImage } alt=''></img>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Prueba3;