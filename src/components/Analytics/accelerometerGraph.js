import React, {Component} from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import socketIOClient from 'socket.io-client';
import Plotly from 'plotly.js/dist/plotly-cartesian';

import AnalyticsStyles from './style'

export default class AccelerometerComponent extends Component {
  constructor() {
    super();
    this.state = {
      linex: {
        x: [0],
        y: [0],
        name: 'x-coordinate'
      },
      liney: {
        x: [0],
        y: [0],
        name: 'y-coordinate'
      },
      linez: {
        x: [0],
        y: [0],
        name: 'z-coordinate'
      },
      layout: {
        title: 'Accelerometer Readings',
        xaxis: {
          title: 'time'
        },
        yaxis: {
          title: 'reading'
        },
        datarevision: 0,
      },
      revision: 0,
      endpoint: 'http://localhost:5000'
    }
  }

  render() {
    const AccelerometerComponent = createPlotlyComponent(Plotly);
    let layout = {
      title: 'Accelerometer Readings',
      xaxis: {
        title: 'time'
      },
      yaxis: {
        title: 'reading'
      }
    };

    // const dataPoints = 15
    const socket = socketIOClient(this.state.endpoint);

    const {linex,liney,linez} = this.state;
    socket.on('incoming data', (packet) => {
      linex.x.push(packet[6])
      linex.y.push(packet[0])
      liney.x.push(packet[6])
      liney.y.push(packet[1])
      linez.x.push(packet[6])
      linez.y.push(packet[2])
      this.setState({revision: this.state.revision + 1 });
      layout.datarevision = this.state.revision + 1;
    })

    return (
      <AnalyticsStyles>
          <AccelerometerComponent className="accelerometer-graph" data={[
              this.state.linex, this.state.liney, this.state.linez
            ]} layout={this.state.layout} revision={this.state.revision}/>
     </AnalyticsStyles>
    );
  }
}