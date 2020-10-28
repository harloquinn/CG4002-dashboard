import React, {Component} from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import imgA from './userA.png'
import imgB from './userB.png'
import imgC from './userC.png'
import socketIOClient from 'socket.io-client';
import AccelerometerComponent1 from '../Analytics/accelerometerGraph1';
import AccelerometerComponent2 from '../Analytics/accelerometerGraph2';
import AccelerometerComponent3 from '../Analytics/accelerometerGraph3';

import GyroscopeComponent1 from '../Analytics/gyroscopeGraph1';
import GyroscopeComponent2 from '../Analytics/gyroscopeGraph2';
import GyroscopeComponent3 from '../Analytics/gyroscopeGraph3';

import DanceMonitorStyles from './style';

export default class DanceMonitorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      start: false,
      status: '',
      userCount: 3,
      predictedDance: '',
      userA: imgA,
      userB: imgB,
      userC: imgC,
      showA:true,
      showB:true,
      showC:true,
      endpoint: 'http://localhost:5000',
      position: [1,2,3]
    }
  }

  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on('dance move', (dancemoves) => {
      this.setState({start: true, predictedDance:dancemoves });
    })
    socket.on('active users', (data) => {
      this.setState({userCount: data });
    })
    socket.on('change position', (positionData) => {
      this.setState({position: positionData});
      this.changePosition(positionData);
    })
    
  }

  changePosition = (positionData) => {
    var positionDict = {}
    positionDict[1] = imgA;
    positionDict[2] = imgB;
    positionDict[3] = imgC;
    console.log('test',positionDict[2]);
    this.setState({
      userA: positionDict[positionData[0]],
      userB: positionDict[positionData[1]],
      userC:positionDict[positionData[2]]
    })
  }

  // checkDance() {
  //   const {Amove,Bmove, Cmove} = this.state;
  //   console.log(Amove[Amove.length - 1])
  //   console.log(Bmove[Bmove.length - 1])
  //   console.log(Cmove[Cmove.length - 1])

  //   if (Amove[Amove.length - 1] === Bmove[Bmove.length - 1] && Amove[Amove.length - 1] === Cmove[Cmove.length - 1]) 
  //     this.setState({status: 'Excellent!'})
  //   else
  //     this.setState({status: 'Lets try again!'})
  // }
  hideGraph = (user) => {
    if (user === 'userA')
      this.setState({showA: !this.state.showA});
    else if (user === 'userB')
      this.setState({showB: !this.state.showB});
    else 
      this.setState({showC: !this.state.showC});
  }

  test = () => {
    this.changePosition([2,1,3]);
  }


  render() {
    console.log(this.state.position[0]);
      return (
          <DanceMonitorStyles>
                  <div className='page-wrapper'>
                      <span className = 'monitor-header'>
                        Dance Monitor
                      </span>
                      <Row className='active-user-panel'>
                        Current Active Users: {this.state.userCount}
                      </Row>
                      <Row>
                      {this.state.userCount === 3 ? 
                        <Button className='ready-button'>
                          Let' Begin!
                        </Button> : null}
                        <Button onClick={this.test}></Button>
                      </Row>
                      <Row>
                      <div className='user-positions'>
                        <div className='individual-state'>
                        {this.state.userCount >= 1 ? 
                        <div>
                          <img src={this.state.userA} alt={'userA'} width='200px' height='350'px/>
                        <br></br>
                        </div>
                            : null}
                        </div>
                        <div className='individual-state'>
                        {this.state.userCount >= 2 ? 
                        <div>
                          <img src={this.state.userB} alt={'userB'} width='200px' height='350'px/>
                          <br></br>
                        </div> : null}
                        </div>
                        <div className='individual-state'>
                        {this.state.userCount >= 3 ?
                        <div>
                          <img src={this.state.userC} alt={'userC'} width='200px' height='350'px/>
                          <br></br>
                        </div> : null}
                        </div>                        
                      </div>
                      </Row> 
                      <Row className='danceStatus'>
                          <span>
                            {this.state.predictedDance}
                          </span>
                      </Row>
                      <Row className='danceStatus'>
                        {this.state.position}
                      </Row>
                      <br></br>
                      <br></br>
                  </div>
                  <div className='userAGraph'>
                    {this.state.showA ? <Button onClick={() => this.hideGraph('userA')}>Hide User A data</Button> :
                    <Button onClick={() => this.hideGraph('userA')}> Show User A data </Button>}
                    {this.state.showA ? <div className='graphPanel'><AccelerometerComponent1/>
                    <GyroscopeComponent1/></div> : null}
                  </div>
                  <div className='userBGraph'>
                    {this.state.showB ? <Button onClick={ () => this.hideGraph('userB')}>Hide User B data</Button> :
                    <Button onClick={() => this.hideGraph('userB')}> Show User B data </Button>}
                    {this.state.showB ? <div className='graphPanel'><AccelerometerComponent2/>
                    <GyroscopeComponent2/></div> : null}
                  </div>
                  <div className='userCGraph'>
                    {this.state.showC ? <Button onClick={() => this.hideGraph('userC')}>Hide User C data</Button> :
                    <Button onClick={() => this.hideGraph('userC')}> Show User C data </Button>}
                    {this.state.showC ? <div className='graphPanel'><AccelerometerComponent3/>
                    <GyroscopeComponent3/></div> : null}
                  </div>
          </DanceMonitorStyles>
      )
  }
}