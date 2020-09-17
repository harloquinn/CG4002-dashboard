import React, {Component} from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import Plotly from 'plotly.js/dist/plotly-cartesian';

import AnalyticsStyles from './style'
export default class GyroscopeComponent extends Component {
  render() {
    const GyroscopeComponent = createPlotlyComponent(Plotly);
    let gyroscopeData = [
      {
        type: 'scatter',
        name: 'x-coordinate',
        x: [1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2],
        y: [5, 1, 3, 6, 7, 8, 1],
        marker: {
          color: 'rgb(235, 52, 125)'
        }
      },
      {
        type: 'scatter',
        name: 'y-coordinate',
        x: [1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2],
        y: [4, 8, 1, 7, 1, 2, 6],
        marker: {
          color: 'rgb(240, 136, 17)'
        }
      },
      {
        type: 'scatter',
        name: 'z-coordinate',
        x: [1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2],
        y: [3, 4, 6, 8, 3, 4, 1],
        marker: {
          color: 'rgb(22, 152, 222)'
        }
      },
    ];
    let layout = {
      title: 'Gyroscope Readings',
      xaxis: {
        title: 'time'
      },
    };
    let config = {
      showLink: false,
      displayModeBar: false
    };
    return (
      <AnalyticsStyles>
          <GyroscopeComponent className="gyroscope-graph" data={gyroscopeData} layout={layout} config={config}/>
     </AnalyticsStyles>
    );
  }
}