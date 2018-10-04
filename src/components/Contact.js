import React, { Component } from 'react';
import './styles/Contact.css';
import costumerServImage from '../images/contact.jpg';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className='contactImage__container'>
          <img src={ costumerServImage } alt=''></img>
        </div>
        <div className='company__container'>
          <h1>Contact Eat Healthy</h1>
        </div>
        <div className='slogan__contact'>
          <p>Get in touch with us to get healthy</p>
        </div>
        <div className='contactinfo__container'>
          <div className='contactinfo__card'>
            
            <div className='individual__card'>
              <div className='icon__container'>
                <div className='circle'>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
              </div>
              <div className='waycontact__container'>
                <h3>EMAIL</h3>
              </div>
              <div className='waycontact__info__container'>
                <h3>contact@eathealthy.com</h3>
              </div>
            </div>

            <div className='individual__card'>
              <div className='icon__container'>
                <div className='circle'>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                </div>
              </div>
              <div className='waycontact__container'>
                <h3>TELEPHONE</h3>
              </div>
              <div className='waycontact__info__container'>
                <h3>+1 982245 896324</h3>
              </div>
            </div>

            <div className='individual__card'>
              <div className='icon__container'>
                <div className='circle'>
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                </div>
              </div>
              <div className='waycontact__container'>
                <h3>WHATSAPP</h3>
              </div>
              <div className='waycontact__info__container'>
                <h3>+1 2245 896324</h3>
              </div>
            </div>

            <div className='individual__card'>
              <div className='icon__container'>
                <div className='circle'>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
              </div>
              <div className='waycontact__container'>
                <h3>INSTAGRAM</h3>
              </div>
              <div className='waycontact__info__container'>
                <h3>@eathealthy</h3>
              </div>
            </div>

            <div className='individual__card'>
              <div className='icon__container'>
                <div className='circle'>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
              </div>
              <div className='waycontact__container'>
                <h3>FACEBOOK</h3>
              </div>
              <div className='waycontact__info__container'>
                <h3>Eat Healthy</h3>
              </div>
            </div>

            <div className='individual__card'>
              <div className='icon__container'>
                <div className='circle'>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
              </div>
              <div className='waycontact__container'>
                <h3>TWITTER</h3>
              </div>
              <div className='waycontact__info__container'>
                <h3>@eat_healthy</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;