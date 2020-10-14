import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from './brand.png'
import NavBarStyles from './style';

class NavBarComponent extends Component {
  render() {
    return (
      <NavBarStyles>
        <Navbar className='navbar-header'>
          <Navbar.Brand>
            <img src={logo} alt={'logo'} width='40px' height='40px'></img>
            <span className='navbar-brand'>Let's Dance!</span>
          </Navbar.Brand>
        </Navbar>
      </NavBarStyles>
    )
  }
}

export default NavBarComponent;