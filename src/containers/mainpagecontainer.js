import React, {Component} from 'react';
import DanceMonitorComponent from '../components/DanceMonitor/dancemonitor';
import NavBarComponent from '../components/NavBar/navbar';
import OptionPanelComponent from '../components/OptionPanel/optionpanel';
import MainStyles from './style';
import { Row } from 'react-bootstrap';
import AccelerometerComponent from '../components/Analytics/accelerometerGraph';
import GyroscopeComponent from '../components/Analytics/gyroscopeGraph';

export default class MainPageContainer extends Component {
   render() {
       return (
           <MainStyles>
              <NavBarComponent/>
              <div className='grid-wrapper'>
                  <Row className='dance-monitor-wrapper'>
                  <DanceMonitorComponent/>
                  </Row>
                  <Row className='option-panel-wrapper'>
                  <OptionPanelComponent/>
                  </Row>
              </div>
              <div className='analytics-wrapper'>
                <AccelerometerComponent></AccelerometerComponent>
                <GyroscopeComponent></GyroscopeComponent>
              </div>
           </MainStyles>
       )
   }
}