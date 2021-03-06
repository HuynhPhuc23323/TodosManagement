import React, {Component} from "react";
import AuthenticationService from './AuthenticationService';

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: 'phuchh266',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event){
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked(){
        //phuchh266, 123456
        if(this.state.username === 'phuchh266' && this.state.password === '123456'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.navigate(`/welcome/${this.state.username}`)
            this.setState({
                //showSuccessMessage:true,
                //hasLoginFailed: false
            })
        }
        else{
            this.setState({
                showSuccessMessage:false,
                hasLoginFailed: true
            })
        }
    }

    render () {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password: <input type="password" name="password"  value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }

}
export default LoginComponent