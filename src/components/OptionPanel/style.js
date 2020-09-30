import styled from 'styled-components';
import { BUTTON_COLOR, BG_COLOR } from '../constants';

const OptionPanelStyles = styled.div`
   .option-panel {
       padding:10px;
       height: 600px;
       justify-content: center;
   }
   .option-button {
       padding: 4px;
       margin: 5px;
       width: 80%;
       background-color: ${BUTTON_COLOR};
   }
   .modal-header {
       border-bottom: 0px;
       padding: 5px;
       color: ${BUTTON_COLOR};
       font-family: fantasy;
       font-size:26px;
       justify-content: center;
   }
   .row {
        justify-content: center !important;
   }
`;

export default OptionPanelStyles;