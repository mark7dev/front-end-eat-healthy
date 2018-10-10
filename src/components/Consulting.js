import React, { Component } from 'react';
import imageNutritionist1 from '../images/nutritionist1.jpeg'
import './styles/Consulting.css'

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import request from 'superagent';

import {Line} from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [
      {
        label: 'Weight',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(104,191,63,0.4)',
        borderColor: 'rgba(104,191,63,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [88, 85, 87, 86, 81, 83, 82, 80, 79, 81],
       
      },
      {
        label: 'IMC',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [46.15, 43.58, 46.15, 43.07, 41.53, 42.56, 42.05, 41.02, 40.51, 41.53],
       
      }
    ]
  };


class Consulting extends Component {

    constructor () {
        super();
    
        this.state = {
          open: false,
          user: [],
          email: localStorage.getItem('email'),
        };
    }

getUsersInfo = (props) => {
    request.get(`http://localhost:3000/apieh/v1/users/${ this.state.email }`)
    .then ( response => {
        this.setState({
            user: response.body.user[0]
        })
    })
}

componentWillMount (){
    this.getUsersInfo();
}

    render() {
        console.log(this.state);


        const formStyles = {
            display: 'flex',
            flexWrap: 'wrap',
        }
        
        const textField = {
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
        }
        
        const buttonStyle = {
            marginTop: 30,
            background: '#AFB42B',
            color:'white',
        }

        const TableStyles = {
            // marginTop: 30
          };


        return (
            <div className='consulting__main__container'>
                <div className='consulting__container1'>
                    <div className='consulting__image__container'>
                        <img id='img1' src= { imageNutritionist1 } alt=''></img>
                    </div>
                    <div className='patientdata__container'>
                        <div className='patient__info__container'>
                            <div className='name__section__container'>
                                <h1 className='patient__section'>Patient Information</h1>
                            </div>
                            <div className='patient__info__board'>
                                <Table style={ TableStyles }>
                                    <TableHead>
                                        <TableRow>
                                            {/* <TableCell>ID</TableCell> */}
                                            <TableCell>Registration date</TableCell>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Last Name</TableCell>
                                            <TableCell>Age</TableCell>
                                            <TableCell>Gender</TableCell>
                                            <TableCell>Company</TableCell>
                                            <TableCell>Telephone</TableCell>
                                            <TableCell>Email</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow >
                                            {/* <TableCell>{ this.state.user._id }</TableCell> */}
                                            <TableCell>{ this.state.user.dateRegister }</TableCell>
                                            <TableCell>{ this.state.user.name }</TableCell>
                                            <TableCell>{ this.state.user.lastName }</TableCell>
                                            <TableCell>{ this.state.user.age }</TableCell>
                                            <TableCell>{ this.state.user.gender }</TableCell>
                                            <TableCell>{ this.state.user.company }</TableCell>
                                            <TableCell>{ this.state.user.telephone }</TableCell>
                                            <TableCell>{ this.state.user.email }</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                        <div className='consulting__form__container'>
                            <div className='name__section__container'>
                                <h1 className='patient__section'>Consulting</h1>
                            </div>
                            <div style={ formStyles }>
                                <form onSubmit={ this.onSubmit }>
                                    <div>
                                        <TextField style={ textField }
                                            required
                                            label="Date of consulting"
                                            name="dateConsulting"
                                            variant="outlined"
                                            helperText="YYYY-MM-DD  Example: 2018-10-25"
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Number of month"
                                            type="number" 
                                            name="numberMonth"
                                            variant="outlined"
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Weight"
                                            type="number"
                                            name="weight"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Height" 
                                            type="number"                               
                                            name="height"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Waist circumference" 
                                            type="number"                               
                                            name="waistCircumference"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Hip circumference"
                                            type="number"                                
                                            name="hipCircumference"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Fat mass"
                                            type="number"                                
                                            name="fatMass%"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Fat mass"
                                            type="number"                                
                                            name="fatMass"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Muscle mass"
                                            type="number"                                
                                            name="muscleMass%"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Muscle mass"
                                            type="number"                                
                                            name="muscleMass"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="Body water"
                                            type="number"                                
                                            name="bodywater"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="MUAC"
                                            type="number"                                
                                            name="muac"
                                            variant="outlined"
                                            helperText="Mid-upper-arm-circumference"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                        <TextField style={ textField }
                                            required
                                            label="IMC"
                                            type="number"                                
                                            name="imc"
                                            variant="outlined"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">Kg/m</InputAdornment>,
                                            }}
                                            onChange={ this.handleChange }
                                        />
                                    </div>
                                    <div className='button__save__container'>
                                        <Button type='submit' style={ buttonStyle } variant='contained'>Save</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='consulting__container2'>   
                    <div className='tracking__container'>
                        <div className='name__section__container'>
                            <h1 className='patient__section'>Tracking</h1>
                        </div>
                        <div className='tracking__board'>
                            <Table style={ TableStyles }>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Month</TableCell>
                                        <TableCell>Weight Kg</TableCell>
                                        <TableCell>Height cm</TableCell>
                                        <TableCell>Waist circumference cm</TableCell>
                                        <TableCell>Hip circumference cm</TableCell>
                                        <TableCell>Fat mass %</TableCell>
                                        <TableCell>Fat mass Kg</TableCell>
                                        <TableCell>Muscle mass %</TableCell>
                                        <TableCell>Body water %</TableCell>
                                        <TableCell>MUAC cm</TableCell>
                                        <TableCell>IMC Kg/m</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow >
                                        {/* <TableCell>{ this.state.user.dateRegister }</TableCell>
                                        <TableCell>{ this.state.user.name }</TableCell>
                                        <TableCell>{ this.state.user.lastName }</TableCell>
                                        <TableCell>{ this.state.user.age }</TableCell>
                                        <TableCell>{ this.state.user.gender }</TableCell>
                                        <TableCell>{ this.state.user.company }</TableCell>
                                        <TableCell>{ this.state.user.telephone }</TableCell>
                                        <TableCell>{ this.state.user.email }</TableCell>
                                        <TableCell>{ this.state.user.company }</TableCell>
                                        <TableCell>{ this.state.user.telephone }</TableCell>
                                        <TableCell>{ this.state.user.email }</TableCell> */}
                                        <TableCell>1</TableCell>
                                        <TableCell>88</TableCell>
                                        <TableCell>195</TableCell>
                                        <TableCell>30</TableCell>
                                        <TableCell>80</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>15</TableCell>
                                        <TableCell>70</TableCell>
                                        <TableCell>20</TableCell>
                                        <TableCell>25</TableCell>
                                        <TableCell>46.15</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>2</TableCell>
                                        <TableCell>85</TableCell>
                                        <TableCell>195</TableCell>
                                        <TableCell>29</TableCell>
                                        <TableCell>80</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>14</TableCell>
                                        <TableCell>70</TableCell>
                                        <TableCell>20</TableCell>
                                        <TableCell>25</TableCell>
                                        <TableCell>43.58</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>3</TableCell>
                                        <TableCell>87</TableCell>
                                        <TableCell>195</TableCell>
                                        <TableCell>29</TableCell>
                                        <TableCell>79</TableCell>
                                        <TableCell>9</TableCell>
                                        <TableCell>13</TableCell>
                                        <TableCell>71</TableCell>
                                        <TableCell>19</TableCell>
                                        <TableCell>25</TableCell>
                                        <TableCell>46.15</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>4</TableCell>
                                        <TableCell>86</TableCell>
                                        <TableCell>195</TableCell>
                                        <TableCell>28</TableCell>
                                        <TableCell>78</TableCell>
                                        <TableCell>8</TableCell>
                                        <TableCell>12</TableCell>
                                        <TableCell>72</TableCell>
                                        <TableCell>20</TableCell>
                                        <TableCell>25</TableCell>
                                        <TableCell>43.07</TableCell>
                                    </TableRow>
                                    <TableRow >
                                        <TableCell>5</TableCell>
                                        <TableCell>81</TableCell>
                                        <TableCell>195</TableCell>
                                        <TableCell>27</TableCell>
                                        <TableCell>77</TableCell>
                                        <TableCell>7</TableCell>
                                        <TableCell>13</TableCell>
                                        <TableCell>72</TableCell>
                                        <TableCell>19</TableCell>
                                        <TableCell>25</TableCell>
                                        <TableCell>41.53</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                        <div className='graphic'>
                            {/* <h2>Weight</h2> */}
                            <Line data={data} />
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Consulting;