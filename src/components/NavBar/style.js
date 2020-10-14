import styled from 'styled-components'
import { BUTTON_COLOR, BG_COLOR, FONT_COLOR } from '../constants';

const NavBarStyles = styled.div`
    .navbar-header {
        background-color: ${BG_COLOR} !important;
    }
   .navbar-brand {
       margin-left: 10px;
       font-family: cursive;
       font-size:28px;
       color: ${BUTTON_COLOR} !important;
   }
`;

export default NavBarStyles;