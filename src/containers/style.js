import styled from 'styled-components'
import { BUTTON_COLOR, BG_COLOR } from '../components/constants';

const MainStyles = styled.div`
   .grid-wrapper {
       display:flex;
       flex-direction:row;
       padding: 20px;
   }
   .dance-monitor-wrapper {
       width: 85%;
       border-radius: 10px;
       background-color: ${BUTTON_COLOR};
   }
   .option-panel-wrapper {
       width: 15%;
       min-width: 150px;
       border: solid 2px ${BUTTON_COLOR};
       border-radius: 10px;
       justify-content: center;
       background-color: ${BG_COLOR};
   }
   .modal-header {
       background-color: ${BG_COLOR};
   }
   .modal-body {
       background-color: ${BG_COLOR}
   }
   .analytics-wrapper {
       display: flex;
   }
`;

export default MainStyles;