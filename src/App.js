import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import Patient from './components/Patient';

import Contact from './components/Contact';
import Plans from './components/Plans';
import Divider from './components/Divider';
import Login from './components/Login';
import SignUp from './components/SignUp';

import Nutritionist from './components/Nutritionist';
import Consulting from './components/Consulting';
// import Prueba3 from './components/Prueba3';
// import Prueba4 from './components/Prueba4';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      // AuthService.isAuthenticated === true
      localStorage.getItem('jwt') !== null
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: {
            from: props.location
          }
        }} />
    )} />
  );
  

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Divider />
                <Switch>
                    <Route exact path='/' component= { Home }/>
                    <PrivateRoute exact path='/patient' component= { Patient }/>

                    <Route exact path='/plans' component= { Plans }/>
                    <Route exact path='/contact' component= { Contact }/>
                    <Route exact path='/login' component= { Login }/>
                    <Route exact path='/signup' component= { SignUp }/>
                    <Route exact path='/nutritionist' component= { Nutritionist }/>
                    {/* <Route exact path='/prueba3' component= { Prueba3 }/> */}
                    <Route exact path='/nutritionist/consulting/:emailPatient' component= { Consulting }/>
                    {/* <Route exact path='/nutritionist/consulting' component= { Consulting }/> */}
                    
                </Switch>
                {/* <Divider /> */}
                <Footer />
            </div>
        );
    }
}

export default App;
