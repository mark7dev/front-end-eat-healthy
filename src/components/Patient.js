import React, { Component } from 'react';
import patientImage from '../images/patient.jpeg'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {Line} from 'react-chartjs-2';

import './styles/Patient.css'


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

class Patient extends Component {
    render() {

        const TableStyles = {
            // marginTop: 30
          };

        return (
            <div>
                <div className='patient__container'>
                    <div className='patient__image__contianer'>
                        <img src={ patientImage } ></img>
                    </div>
                    <div className='patient__text__welcome'>
                        <h1>This is your progress, you are in the right track!</h1>
                    </div>
                    <div className='patient__consultings__container'>
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
                                <TableRow>
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
                    <div className='patient__graphic__container'>
                        <Line data={data} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Patient;