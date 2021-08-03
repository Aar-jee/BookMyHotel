import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "../css/Login.css";
import { LoginAction } from '../redux/actions/postAction';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.myRefForUsername = React.createRef();
        this.myRefForPassword = React.createRef();
    }

    SignIn = () => {
        if (this.myRefForUsername.current.value && this.myRefForPassword.current.value) {
            this.props.LoginAction(this.myRefForUsername.current.value, this.myRefForPassword.current.value, true)
        }
    }

    SignUp = () => {
        this.props.history.push(`/Signup`)
    }

    render() {

        return (


            <div className="login-box">
                <div className="loginContainer">
                    {(this.props.user && this.props.user.name) && <Redirect to="/Home" />}
                    <form className="main-form">
                        <FormGroup controlId="name">
                            <FormControl className="txtInput"
                                ref={this.myRefForUsername}
                                type="text"
                                placeholder="User Name"
                            />
                        </FormGroup>
                        <FormGroup controlId="password">
                            <FormControl className="txtInput"
                                ref={this.myRefForPassword}
                                type="password"
                                placeholder="Password"
                            />
                        </FormGroup>
                        <Button className="login-btn"
                            onClick={this.SignIn}
                        >
                            Log In
                        </Button>
                        <hr></hr>
                        <Button className="signup-btn btn-success"
                            onClick={this.SignUp}
                        >
                            Create New Account
                        </Button>
                    </form>
                </div>
            </div>



        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.data.globalObject.loginUser
    }
}

export default connect(mapStateToProps, { LoginAction })(Login);