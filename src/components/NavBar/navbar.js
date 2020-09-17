import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.png'
import NavBarStyles from './style';

class NavBarComponent extends Component {
  render() {
    return (
      <NavBarStyles>
        <Navbar bg="dark">
          <Navbar.Brand className='navbar-brand'>
          Let's Dance!
          </Navbar.Brand>
        </Navbar>
      </NavBarStyles>
    )
  }
}

export default NavBarComponent;