import * as React from 'react';
import {observer, inject} from 'mobx-react';
import { UserStore } from '../../../stores/UserStore';
import { Redirect } from 'react-router';

@inject("AuthStore")
@observer
class Login extends React.Component<{}> {
    constructor(props,state){
        super(props);
        this.state = {username:"",password:""};
    }


    //onUserNameChange(e: React.ChangeEvent<HTMLInputElement>){
    onUserNameChange(e: string){

        this.setState({username: e});
    }
    onPasswordChange(e: string){
        this.setState({password: e});
    }

    loginUser(){
        // this.props.AuthStore.login(this.state.username,this.state.password);
    }
    render() {
        return (
            <div className="app flex-row align-items-center bg-lea-secondary-gray">
                Login
                {/* <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <form onSubmit={(e)=>{e.preventDefault(); this.loginUser();}}>
                                            <h1>Login to <small>L.E.A.</small></h1>
                                            <p className="text-muted">Sign In to your account</p>
                                            <InputGroup className="mb-3">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="icon-user"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="text" placeholder="Username" onChange={(e)=> this.onUserNameChange(e.target.value)}/>
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                    <i className="icon-lock"></i>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="password" placeholder="Password"  onChange={(e)=> this.onPasswordChange(e.target.value)}/>
                                            </InputGroup>

                                        <Row>
                                            <Col xs="6">
                                                <Button color="lea-primary" className="px-4" type="submit" disabled={this.props.AuthStore.isLoggingIn} onClick={(e)=> this.loginUser()}>
                                                {this.props.AuthStore.isLoggingIn ? <RectSpinner isLoading={this.props.AuthStore.isLoggingIn}/> : "Login"}
                                                </Button>
                                            </Col>
                                            <Col xs="6" className="text-right">
                                                <Button color="link" className="px-0 text-lea-primary">Forgot password?</Button>
                                            </Col>
                                        </Row>
                                        </form>
                                    </CardBody>
                                </Card>
                                <Card className="text-white bg-lea-primary-gray py-5 d-md-down-none"
                                    style={{ width: 44 + '%',background:"url('./img/logon-logo.png')", backgroundPosition: "center",backgroundSize: "cover" }}>
                                    <CardBody className="text-center">

                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container> */}
                {/* {this.props.AuthStore.isLoggedOn ? <Redirect to="/" /> : null} */}
            </div>
        );
    }
}

export default Login;
