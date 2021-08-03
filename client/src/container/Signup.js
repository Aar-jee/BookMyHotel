import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import '../css/Login.css';
import { SignupAction } from '../redux/actions/postAction';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.myRefForUsername = React.createRef();
        this.myRefForPassword = React.createRef();
    }

    SignUp = () => {
        if (this.myRefForUsername.current.value && this.myRefForPassword.current.value) {
            this.props.SignupAction(this.myRefForUsername.current.value, this.myRefForPassword.current.value)
        }
        else {
            alert("Please Enter both values")
        }
    }

    Login = () => {
        this.props.history.push(`/`)
    }

    render() {

        return (

            <div className="login-box">
                <div className="loginContainer">
                    {this.props.signedUp && <Redirect to="/" />}
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
                            onClick={this.SignUp}
                        >
                            Sign Up
                        </Button>
                        <hr></hr>
                        <Button className="signup-btn btn-success"
                            onClick={this.Login}
                        >
                            Go to Login
                        </Button>
                    </form>
                </div>
            </div>
        )

    }

}
const mapStateToProps = state => {
    return {
        signedUp: state.data.globalObject.signedUp
    }
}

export default connect(mapStateToProps, { SignupAction })(Signup);

