import * as React from 'react';
import { NavLink as RouteNavLink } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  Collapse,
  UncontrolledDropdown,
  Container,
} from 'reactstrap';
import { inject } from 'mobx-react';
import { UserStore } from '../../stores/UserStore';
import { observable, action } from 'mobx';

@inject("AuthStore")
class Header extends React.Component<{ AuthStore?: UserStore }, { dropdownOpen: boolean }> {

  /**
   *
   */
  constructor(props, state) {
    super(props, state);


  }

  @observable isOpen: boolean = false;

  @action
  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Navbar className="app-header" color="white" light expand="md">
        <Container>
          <NavbarBrand href="/">
            <img alt="Logo 1" className="center-block img-responsive logo-img logo-1-img" src="/Images/myob-logo.svg" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/dawsonsuen">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header;
