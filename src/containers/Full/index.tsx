import * as React from 'react';
import { AppState } from '../..';
import { Container, Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Dashboard from '../../views/Dashboard';
import { observable, action } from 'mobx';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


class Full extends React.Component<AppState & { url?: string }, {}> {
    constructor(props) {
        super(props);
    }

    @observable isOpen: boolean = false;

    @action
    toggle(): void {
        this.isOpen = !this.isOpen;
    }
    render() {
        return (
            <div className="app">
               <Header />
                <div className="app-body">
                    <main className="main" style={{marginTop:'57px'}}>
                        <Switch>
                            <Route path="/dashboard" name="Dashboard" url={this.props.url}>
                                <div>
                                    <Container fluid style={{ height: "100%", width: "100%" }}>
                                        <Dashboard />
                                    </Container>
                                </div>
                            </Route>
                        </Switch>
                    </main>
                </div>
                <Footer />

            </div>
        )
    }
}

export default Full;
