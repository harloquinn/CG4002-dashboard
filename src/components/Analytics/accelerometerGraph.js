import React, {Component} from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';

import AnalyticsStyles from './style'

export default class AccelerometerComponent extends Component {
  render() {
    const AccelerometerComponent = createPlotlyComponent(Plotly);
    let accelerometerData = [
      {
        type: 'scatter',
        name: 'x-coordinate',
        x: [1, 2, 3],
        y: [4, 8, 1],
        marker: {
          color: 'rgb(235, 52, 125)'
        }
      },
      {
        type: 'scatter',
        name: 'y-coordinate',
        x: [1, 2, 3],
        y: [2, 3, 1],
        marker: {
          color: 'rgb(240, 136, 17)'
        }
      },
      {
        type: 'scatter',
        name: 'z-coordinate',
        x: [1, 2, 3],
        y: [2, 4, 6],
        marker: {
          color: 'rgb(22, 152, 222)'
        }
      },
    ];
    let layout = {
      title: 'Accelerometer Readings',
      xaxis: {
        title: 'time'
      },
      // annotations: [
      //   {
      //     text: 'simple annotation',
      //     x: 0,                         
      //     xref: 'paper',                
      //     y: 0,                         
      //     yref: 'paper'      
      //   }
      // ]
    };
    let config = {
      showLink: false,
      displayModeBar: false
    };
    return (
      <AnalyticsStyles>
          <AccelerometerComponent className="accelerometer-graph" data={accelerometerData} layout={layout} config={config}/>
     </AnalyticsStyles>
    );
  }
}