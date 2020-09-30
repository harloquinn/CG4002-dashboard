import React, {Component} from 'react';
import { Row, Button } from 'react-bootstrap';
import OptionPanelStyles from './style';
// import useScreenRecording from "use-screen-recording";

export default class OptionPanelComponent extends Component {

   render() {
    // const { isRecording, recording, toggleRecording } = useScreenRecording();
       return (
           <OptionPanelStyles>
               <div className='option-panel'>
                   <h2>Options</h2>
                     <Row>
                       <Button
                        className='option-button'
                        > Record Routine </Button>
                     </Row>
                     <Row>
                       <Button className='option-button'>View Past Recordings</Button>
                     </Row>
                     {/* {!!recording && (
                        <video autoPlay src={recording && URL.createObjectURL(recording)} />
                      )} */}
               </div>
           </OptionPanelStyles>
       )
   }
}