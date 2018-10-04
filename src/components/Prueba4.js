import React, { Component } from 'react';
import imageNutritionist1 from '../images/nutritionist1.jpeg'
import './styles/Prueba4.css'

import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';

class Consulting extends Component {
    render() {

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

        return (
            <div className='consulting__container'>
                <div className='consulting__image__container'>
                    <img id='img1' src= { imageNutritionist1 } alt=''></img>
                </div>
                <div className='consulting__form__container'>
                    <h1>Consulting</h1>
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
                            <TextField style={ textField }
                                required
                                label="Age"
                                type="number"
                                name="age"
                                variant="outlined"
                                onChange={ this.handleChange }
                            />
                            <Button type='submit' style={ buttonStyle } variant='contained'>Save</Button>
                        </form>
                    </div>
                </div>
            </div>

          
        );
       
    }
}

export default Consulting;