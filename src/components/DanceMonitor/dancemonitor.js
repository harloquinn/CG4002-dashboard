import React, {Component} from 'react';
import {Button, Row, Col} from 'react-bootstrap';
import userA from './userA.png'
import userB from './userB.png'
import userC from './userC.png'
import socketIOClient from 'socket.io-client';

import DanceMonitorStyles from './style';

export default class DanceMonitorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      start: false,
      status: '',
      userCount: 3,
      predictedDance: 'Rocket',
      endpoint: 'http://localhost:5000'
    }
  }

  componentDidMount() {
    const socket = socketIOClient(this.state.endpoint);
    const {predictedDance} = this.state;
    socket.on('dance move', (dancemove) => {
      predictedDance.push(dancemove)
      this.setState({start: true, predictedDance:predictedDance });
    })
    socket.on('active users', (data) => {
      this.setState({userCount: data });
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

  render() {
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
                      </Row>
                      <Row>
                      <div className='user-positions'>
                        <div className='individual-state'>
                        {this.state.userCount >= 1 ? 
                        <div>
                          <img src={userA} alt={'userA'} width='200px' height='350'px/>
                          <br></br>
                        </div>
                            : null}
                        </div>
                        <div className='individual-state'>
                        {this.state.userCount >= 2 ? 
                        <div>
                          <img src={userB} alt={'userB'} width='200px' height='350'px/>
                          <br></br>
                        </div> : null}
                        </div>
                        <div className='individual-state'>
                        {this.state.userCount >= 3 ?
                        <div>
                          <img src={userC} alt={'userC'} width='200px' height='350'px/>
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
                      <br></br>
                      <br></br>
                  </div>
          </DanceMonitorStyles>
      )
  }
}