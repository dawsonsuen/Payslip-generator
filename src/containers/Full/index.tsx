import * as React from 'react';
import { Container } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../../views/Dashboard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class Full extends React.Component<{ url?: string }, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                <Header />
                <div className="app-body" style={{ height: 'calc(100% - 151.4px)' }}>
                    <main className="main" style={{ overflow: 'auto', height: '100%' }}>
                        <Switch>
                            <Route path="/dashboard" name="Dashboard" url={this.props.url}>
                                <Container style={{ height: '100%', width: "100%" }}>
                                    <Dashboard />
                                </Container>
                            </Route>
                            <Redirect exact from="/" to="/dashboard" />
                        </Switch>
                    </main>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Full;
