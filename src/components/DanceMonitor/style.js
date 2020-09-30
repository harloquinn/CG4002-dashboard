import styled from 'styled-components'
import { BUTTON_COLOR, BG_COLOR } from '../constants';

const DanceMonitorStyles = styled.div`
   .page-wrapper {
       display: inline-block;
       padding: 10px;
       height: 600px;
       width: 100%;
       justify-content: center;
   }
   .row {
      justify-content: center !important;
   }
   .monitor-header {
       border-bottom: 0px;
       font-family: fantasy;
       font-size:26px;
       color: ${BG_COLOR} !important;
       justify-content: center;
       background-color: ${BUTTON_COLOR} !important;
   }
   .active-user-panel {
      padding:10px;
      margin-left: 30px;
      justify-content: center;
      vertical-align: center;
      height: 50px;
   }
   .ready-button {
      padding: 5px 8px 5px 8px;
      margin-left: 30px;
      vertical-align: center;
      border: 0px;
      background-color: ${BG_COLOR};
   }
   .user-positions {
      display: flex;
      margin: 20px;
      padding: 20px;
      justify-content: center;
   }
   .individual-state {
      text-align: center;
      margin-right: 30px;
   }
   .danceStatus {
      justify-content: center;
      font-size: 30px;
      font-family: fantasy;
      color: white;
   }
`;

export default DanceMonitorStyles;