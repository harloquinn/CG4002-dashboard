import React, {Component} from 'react';
import createPlotlyComponent from 'react-plotlyjs';
import socketIOClient from 'socket.io-client';
import Plotly from 'plotly.js/dist/plotly-cartesian';

import AnalyticsStyles from './style'

export default class AccelerometerComponent3 extends Component {
  constructor() {
    super();
    this.state = {
      timeArray: [0],
      arrayx: [0],
      arrayy: [0],
      arrayz: [0],
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
        plot_bgcolor:'rgba(0,0,0,0)',
        paper_bgcolor:'rgba(0,0,0,0)',
        title: 'Acceleration',
        xaxis: {
          title: 'time (ms)'
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

  componentDidMount() {
    setInterval(this.updateGraph, 2000);
  } 

  updateGraph = () => {
    const {linex,liney,linez,layout,arrayx, arrayy,arrayz,timeArray} = this.state;
    linex.x.push(timeArray[timeArray.length-1]);
    linex.y.push(arrayx[arrayx.length-1]);
    liney.x.push(timeArray[timeArray.length-1]);
    liney.y.push(arrayy[arrayy.length-1]);
    linez.x.push(timeArray[timeArray.length-1]);
    linez.y.push(arrayz[arrayz.length-1]);
    if (linex.x.length >= 20) {
      linex.x.shift();
      linex.y.shift();
    }
    if (liney.x.length >= 20) {
      liney.x.shift();
      liney.y.shift();
    }
    if (linez.x.length >= 20) {
      linez.x.shift();
      linez.y.shift();
    }
    this.setState({revision: this.state.revision + 1});
    layout.datarevision = this.state.revision + 1;
  }

  render() {
    const AccelerometerComponent3 = createPlotlyComponent(Plotly);

    const socket = socketIOClient(this.state.endpoint);

    const {timeArray,arrayx,arrayy,arrayz} = this.state;
    socket.on('incoming data1', (packet) => {
      timeArray.push(packet[6]);
      arrayx.push(packet[0])
      arrayy.push(packet[1]);
      arrayz.push(packet[2]);
    })

    return (
      <AnalyticsStyles>
          <AccelerometerComponent3 className="accelerometer-graph" data={[
              this.state.linex, this.state.liney,this.state.linez]} layout={this.state.layout} revision={this.state.revision}/>
     </AnalyticsStyles>
    );
  }
}