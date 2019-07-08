import * as React from 'react';
import AppConstants from '../../AppConstants';
import { Navbar, Container, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Footer extends React.Component {
  render() {
    return (
      <footer className="app-footer">
        <Nav style={{background:'#fff'}}>
          <Container>
            <NavbarBrand href="/">
              <img alt="Logo 1" className="center-block img-responsive logo-img logo-1-img" src="/Images/myob-logo.svg" />
            </NavbarBrand>
            <NavItem>
              <NavLink href="#">Link1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link2</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Link3</NavLink>
            </NavItem>
          </Container>
        </Nav>
        <Navbar color="dark" expand="md">
          <Container>
            <div><span className="text-white">Develeped by</span> <a href="http://dawsonsuen.github.io/">Dongchen Sun</a></div>
          </Container>
        </Navbar>
      </footer>
    )
  }
}

export default Footer;
