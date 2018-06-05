import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavbarApp extends Component {
  navbarLinks() {
    if (this.props.authenticated) {
      return [
      <Nav>
       <NavItem eventKey={2} href="/table">
        Stocuri
      </NavItem>
      <NavItem eventKey={3} href="/logs">
        Log-uri SMS
      </NavItem>
      <NavItem eventKey={5} href="/sms">
        Alerta
      </NavItem>
      <NavItem eventKey={4} href="/stiva">
        Stiva
      </NavItem>


      </Nav>,
      <Nav pullRight>
        <NavItem eventKey={4} href="/settings">
          Setari
        </NavItem>
        <NavItem eventKey={1} href="/signout">
          Deconectare
        </NavItem>
      </Nav>
      ];
    }
  }

  navbarSignOut(){
    if(!this.props.authenticated){
      return [
      <Nav pullRight>
        <NavItem eventKey={0} href="/signin">
          Autentificare
        </NavItem>
      </Nav>
      ];
    }
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect fluid fixedTop staticTop >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Sanguinity</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              {this.navbarLinks()}
              {this.navbarSignOut()}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(NavbarApp);