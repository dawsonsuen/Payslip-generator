import * as React from 'react';
import { HashRouter, Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer, Provider, inject } from "mobx-react";
import { UserStore } from './stores/UserStore';
import Login from './views/Pages/Login';
import Full from './containers/Full';

const routes = {
    '/': 'Home',
    '/login': 'Login',
};
export default routes;

@inject("AuthStore")
@observer
export class MainRouter extends React.Component<{AuthStore?:UserStore}>
{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div style={{height:'100%'}}>
                <Switch>
                    <Route exact path="/login" name="Login" component={Login}/>
                    {!this.props.AuthStore.isLoggedOn ?  <Redirect to="/login" />:null}
                    <Route path="/" name="Home" component={Full}/>
                </Switch>
            </div>
        );
    }
}