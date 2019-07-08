import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { MainRouter } from './routes';
import { Provider } from 'mobx-react';
import { UserStore, userStore } from './stores/UserStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export interface AppState {
    AuthStore?: UserStore,
};
interface IAuthStore {
    isAuthorized: boolean
}
const state = {
    AuthStore: userStore,
} as AppState;

const app = withRouter(MainRouter);

ReactDOM.render((
    <Provider  {...state} url={window.location.hash} >
        <HashRouter>
            <Route component={app} />
        </HashRouter>
    </Provider>
), document.getElementById('root'));
