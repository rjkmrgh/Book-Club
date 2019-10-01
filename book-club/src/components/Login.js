import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <div>
                <h1>Book Clubz</h1>
                <h2>Welcome {this.props.user}!!</h2>
            </div>
        );
    }
}

export default Login;