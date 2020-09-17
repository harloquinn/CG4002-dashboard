import React, {Component} from 'react';
import { Row, Button } from 'react-bootstrap';
import OptionPanelStyles from './style';

export default class OptionPanelComponent extends Component {
   render() {
       return (
           <OptionPanelStyles>
               <div className='option-panel'>
                   <h2>Options</h2>
                     <Row>
                       <Button className='option-button'>Record Routine</Button>
                     </Row>
                     <Row>
                       <Button className='option-button'>View Past Recordings</Button>
                     </Row>
               </div>
           </OptionPanelStyles>
       )
   }
}