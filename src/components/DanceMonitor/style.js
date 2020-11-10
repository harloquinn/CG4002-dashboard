import styled from 'styled-components'
import { BUTTON_COLOR, BG_COLOR, HEADER_COLOR } from '../constants';

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
       display: flex;
       font-family: fantasy;
       font-size: 32px;
       color: ${HEADER_COLOR} !important;
       justify-content: center;
   }
   .active-user-panel {
      padding:10px;
      justify-content: center;
      vertical-align: center;
      height: 50px;
      font-size: 18px;
   }
   .ready-button {
      padding: 8px 10px 8px 10px;
      vertical-align: center;
      border: 0px;
      margin-right: 20px;
      font-size: 18px !important;
      color: white !important;
      background-color: ${BG_COLOR} !important;
   }
   .reset-button {
      padding: 8px 10px 8px 10px;
      vertical-align: center;
      border: 0px;
      font-size: 18px !important;
      color: white !important;
      background-color: ${HEADER_COLOR} !important;
   }
   .user-positions {
      display: flex;
      margin: 20px;
      padding: 20px;
      justify-content: center;
   }
   .individual-state {
      text-align: center;
      margin-right: 50px;
      margin-left: 50px;
   }
   .danceStatus {
      justify-content: center;
      font-family: fantasy;
      font-size: 32px;
      color: black;
   }
   .userAGraph {
      display:flex;
      justify-content: center;
      background-color: rgba(252,192,28,0.7);
   }
   .userBGraph {
      display:flex;
      justify-content: center;
      background-color: rgba(238,119,106,0.7);
   }
   .userCGraph {
      display:flex;
      justify-content: center;
      background-color: rgba(124,115,29,0.7);
   }
   .graphPanel {
      display:flex;
      justify-content: center;
   }
   .btn-primary {
      background-color: rgba(255,255,255, 0.3);
      border: none;
      color: ${HEADER_COLOR};
      font-family: fantasy;
      font-size: xx-large;
   }
   .btn-primary.focus, .btn-primary:focus {
      outline: 0;
      box-shadow: none!important;
  }
`;

export default DanceMonitorStyles;