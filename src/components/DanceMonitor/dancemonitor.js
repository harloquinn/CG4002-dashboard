import React, {Component} from 'react';
import axios from 'axios';
import {Button, Row, Col} from 'react-bootstrap';
import userA from './userA.png'
import userB from './userB.png'
import userC from './userC.png'

import DanceMonitorStyles from './style';

export default class DanceMonitorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userCount: 0
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users')
    .then(res => this.setState({data: res.data, userCount: Object.keys(res.data).length}));
  }

   render() {
     console.log(this.state.data)
       return (
           <DanceMonitorStyles>
                   <div className='page-wrapper'>
                       <h2>
                       Dance Monitor
                       </h2>
                       <Row className='active-user-panel'>
                          Current Active Users: {this.state.userCount}
                          {this.state.userCount === 3 ? 
                          <Button className='ready-button'>
                            Let' Begin!
                          </Button> : null}
                        </Row>
                        <div className='user-positions'>
                          <div className='individual-state'>
                          <span className='avatar'>{this.state.userCount >= 1 ? 'test' : null}</span>
                          <span> <img src={userA} alt={'userA'} width='200px' height='350'px/></span>
                          <span>'prediction result'</span>
                          {/* <span className='prediction-result'>{this.state.data.predicted === true ? 'YES' : 'NO'}</span> */}
                          </div>
                          <div className='individual-state'>
                          <span className='avatar'>{this.state.userCount >= 2 ? 'test' : null}</span>
                          <span> <img src={userB} alt={'userB'} width='200px' height='350'px/></span>
                          <span>'prediction result'</span>
                          </div>
                          <div className='individual-state'>
                          <span className='avatar'>{this.state.userCount >= 3 ? 'test' : null}</span>
                          <span> <img src={userC} alt={'userC'} width='200px' height='350'px/></span>
                          <span>'prediction result'</span>
                          </div>
                        </div>
                   </div>
           </DanceMonitorStyles>
       )
   }
}