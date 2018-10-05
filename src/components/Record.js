import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Weight',
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
        data: [88, 85, 87, 86, 81],
       
      }
    ]
  };



class Record extends Component {

    displayName: 'LineExample'

    render() {
        return (
            <div>
                <h1>JALA</h1>
                <h2>Line Example</h2>
                <Line data={data} />
            
            </div>
        );
    }
}

export default Record;