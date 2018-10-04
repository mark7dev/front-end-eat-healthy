import React, { Component } from 'react';
import homeImage from '../images/home3.jpg';
// import homeImage from '../images/cover4.jpeg';

import './styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className='home__container'>
                <div className='image__container'>
                    <img src={ homeImage } alt=''></img>
                    <div className='image__text'>
                        {/* <h1 className='companyName'>Eat Healthy</h1> */}
                        <h1 className='slogan'>Better health, better life.</h1>
                    </div>
                </div>
                <div>
                    <section className='parrallax' id='section1'>
                        <div className='about'>
                            <h1 className='points'>About us</h1>
                            <p>We are a company concerned about the health of people, helping them to improve their quality of life by eating a healthy diet based on medical consultations by expert nutritionists.</p>
                        </div>
                    </section>
                    <section className='parrallax' id='section2'>
                        <div className='mission'>
                            <h1 className='points'>Mission</h1>
                            <p>Improve the health of people, offering healthy food in a personalized way based on the medical consultation of our expert nutritionists.</p>
                        </div>
                    </section>
                    <section className='parrallax' id='section3'>
                        <div className='vision'>
                            <h1 className='points'>Vision</h1>
                            <p>Be part of the healthy life of people, providing personalized meal plans for athletes, fitness people and workers.</p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Home;
