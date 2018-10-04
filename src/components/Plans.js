import React, { Component } from 'react';
import './styles/Plans.css';
import plan1 from '../images/plan1.jpg';
import plan2 from '../images/plan2.jpg';
import plan3 from '../images/plan3.jpg';
import plan4 from '../images/plan4.jpg';
import plan5 from '../images/plan5.jpg';
import plan6 from '../images/plan6.jpg';

class Plans extends Component {
  render() {
    return (
      <div>
        <div className='nutritionPlans__container'>
          <div className='nutritionPlans__text__container'>
            <h1>Nutrition Plans</h1>
          </div>
          <div className='nutritionPlans__cards__container'>

            <div className='nutritionPlans__card'>
              <div className='nutritionPlans__card__image__container'>
                <img src= { plan1 } alt=''></img>
              </div>
              <div className='nutritionPlans__card__text'>
                <h2>Monthly Basic</h2>
                <p>Includes 1 healthy meal daily from Monday to Friday for 4 weekss</p>  
              </div>
            </div>

            <div className='nutritionPlans__card'>
              <div className='nutritionPlans__card__image__container'>
                <img src= { plan2 } alt=''></img>
              </div>
              <div className='nutritionPlans__card__text'>
                <h2>Quarterly Basic</h2>
                <p>Includes 1 healthy meal daily from Monday to Friday for 12 weekss</p>  
              </div>
            </div>

            <div className='nutritionPlans__card'>
              <div className='nutritionPlans__card__image__container'>
                <img src= { plan3 } alt=''></img>
              </div>
              <div className='nutritionPlans__card__text'>
                <h2>Biannual Basic</h2>
                <p>Includes 1 healthy meal daily from Monday to Friday for 24 weekss</p>  
              </div>
            </div>

            <div className='nutritionPlans__card'>
              <div className='nutritionPlans__card__image__container'>
                <img src= { plan4 } alt=''></img>
              </div>
              <div className='nutritionPlans__card__text'>
                <h2>Monthly Complete Nutrition</h2>
                <p>Includes breakfast and lunch from Monday to Friday for 4 weeks based on 2 consultations from a specialist nutritionist.</p>  
              </div>
            </div>

            <div className='nutritionPlans__card'>
              <div className='nutritionPlans__card__image__container'>
                <img src= { plan5 } alt=''></img>
              </div>
              <div className='nutritionPlans__card__text'>
                <h2>Quaterly Complete Nutrition</h2>
                <p>Includes breakfast and lunch from Monday to Friday for 12 weeks based on 6 consultations from a specialist nutritionist.</p>  
              </div>
            </div>

            <div className='nutritionPlans__card'>
              <div className='nutritionPlans__card__image__container'>
                <img src= { plan6 } alt=''></img>
              </div>
              <div className='nutritionPlans__card__text'>
                <h2>Biannual Complete Nutrition</h2>
                <p>Includes breakfast and lunch from Monday to Friday for 24 weeks based on 12 consultations from a specialist nutritionist.</p>  
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Plans;