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
      <div className="app-header">
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">Myob</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header;
