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


class Consulting extends Component {

    constructor () {
        super();
    
        this.state = {
          open: false,
          user: [],
        };
    }

getUsersInfo = (props) => {
    request.get(`http://localhost:3000/apieh/v1/users/${ this.props.match.params.emailPatient }`)
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
                                        <TableCell>{ this.state.user.dateRegister }</TableCell>
                                        <TableCell>{ this.state.user.name }</TableCell>
                                        <TableCell>{ this.state.user.lastName }</TableCell>
                                        <TableCell>{ this.state.user.age }</TableCell>
                                        <TableCell>{ this.state.user.gender }</TableCell>
                                        <TableCell>{ this.state.user.company }</TableCell>
                                        <TableCell>{ this.state.user.telephone }</TableCell>
                                        <TableCell>{ this.state.user.email }</TableCell>
                                        <TableCell>{ this.state.user.company }</TableCell>
                                        <TableCell>{ this.state.user.telephone }</TableCell>
                                        <TableCell>{ this.state.user.email }</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default Consulting;