import styled from 'styled-components'
import { BUTTON_COLOR, BG_COLOR } from '../constants';

const DanceMonitorStyles = styled.div`
   .page-wrapper {
       display: block;
       padding: 10px;
       height: 600px;
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
 }
 .user-positions {
    display: flex;
    padding: 5px;
    margin-left: 15px;
    justify-content: center;
 }
 .avatar {
   padding: 10px;
   maring: 20px;
 }
 .individual-state {
    text-align: center;
 }
`;

export default DanceMonitorStyles;