import React, {Component} from 'react';
import DanceMonitorComponent from '../components/DanceMonitor/dancemonitor';
import NavBarComponent from '../components/NavBar/navbar';
import OptionPanelComponent from '../components/OptionPanel/optionpanel';
import MainStyles from './style';

export default class MainPageContainer extends Component {
   render() {
       return (
           <MainStyles>
              <NavBarComponent/>
              <div className='grid-wrapper'>
                  <div className='dance-monitor-wrapper'>
                  <DanceMonitorComponent/>
                  </div>
                  {/* <div className='option-panel-wrapper'>
                  <OptionPanelComponent/>
                  </div> */}
              </div>
           </MainStyles>
       )
   }
}