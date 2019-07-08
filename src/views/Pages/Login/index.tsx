import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect, RouterProps } from 'react-router';
import { Container, Row, Col, Card, Button, Spinner } from 'reactstrap';
import { AppState } from './../../../index';
import { AvForm, AvField } from 'availity-reactstrap-validation';

@inject("AuthStore")
@observer
class Login extends React.Component<AppState & RouterProps> {
    constructor(props) {
        super(props);

    }

    signin(e: any, values: any) {
        this.props.AuthStore.signin(values["username"], values["password"]);
    }

    render() {
        return (
            <div className="login">
                <div className="border-top" />

                <Container>
                    <Row>
                        <Col md={12} style={{ textAlign: 'center' }}>
                            <img alt="Logo" src="/Images/myob-logo.svg" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} style={{ textAlign: 'center', margin: '5px auto 15px' }}>

                            <h5>Sign in to Pay Slip Generator</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="container">
                            <Card style={{ padding: '30px' }}>
                                {
                                    !this.props.AuthStore.isLoggingIn ?
                                        <AvForm autoComplete="on"
                                            disabled={this.props.AuthStore.isLoggingIn}
                                            onValidSubmit={(event, values) => this.signin(event, values)}
                                        >
                                            <Row>
                                                <Col>
                                                    <AvField type="text" name="username" label="Username" validate={{
                                                        required: { value: true, errorMessage: 'Username is required' }
                                                    }} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <AvField type="text" name="password" label="Password" validate={{
                                                        required: { value: true, errorMessage: 'Password is required' }
                                                    }} />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button color="success" type="submit" style={{ width: '100%', marginTop: '15px' }} disabled={this.props.AuthStore.isLoggingIn}>
                                                        Sign in
                                                {this.props.AuthStore.isLoggingIn ? (<Spinner style={{ verticalAlign: "middle", marginLeft: "10px", width: "1.5rem", height: "1.5rem" }} color="warning" />) : null}
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </AvForm>
                                        : null
                                }
                            </Card>
                        </Col>
                    </Row>
                </Container>
                {this.props.AuthStore.isLoggedOn ? <Redirect to="/" /> : null}

            </div>
        );
    }
}

export default Login;
