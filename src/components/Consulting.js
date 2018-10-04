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
            marginTop: 10,
        }
        
        const buttonStyle = {
            marginTop: 30,
            background: '#AFB42B',
            color:'white',
        }

        const TableStyles = {
            marginTop: 30
          };


        return (
            <div className='consulting__main__container'>
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
                                    <TableCell>ID</TableCell>
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
                            {/* { this.state.companies.map(company => {
                                return ( */}
                                <TableRow >
                                    <TableCell>{ this.state.user._id }</TableCell>
                                    <TableCell>PRUEBAS</TableCell>
                                    <TableCell>PRUEBAS</TableCell>
                                    <TableCell>PRUEBAS</TableCell>
                                    <TableCell>PRUEBAS</TableCell>
                                    <TableCell>PRUEBAS</TableCell>
                                    <TableCell>PRUEBAS</TableCell>
                                    <TableCell>PRUEBAS</TableCell>
                                    <TableCell>PRUEBAS</TableCell>
                                </TableRow>
                            {/* //     );
                            // }) } */}
                            </TableBody>
                        </Table>
                        </div>
                    </div>
                    <div className='consulting__form__container'>
                        <h1 className='patient__section'>Consulting</h1>
                        <div style={ formStyles }>
                            <form onSubmit={ this.onSubmit }>
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
                                    label="Date of register"
                                    name="dateRegister"
                                    variant="outlined"
                                    helperText="YYYY-MM-DD  Example: 2018-10-25"
        
                                    // placeholder="YYYY-MM-DD  Example: 2018-10-25"
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
                                {/* <TextField style={ textField }
                                    required
                                    label="Age"
                                    type="number"
                                    name="age"
                                    variant="outlined"
                                    onChange={ this.handleChange }
                                /> */}
                                <Button type='submit' style={ buttonStyle } variant='contained'>Save</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Consulting;