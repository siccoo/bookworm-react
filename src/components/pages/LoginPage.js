import React from 'react';
import LoginForm from '../forms/LoginForm';


class LoginPage extends React.Component {
    render () {
        submit.propTypes = data => {
            console.log(data)
        };
        return (
            <div>
                <h1>Login</h1>

                <LoginForm submit={this.submit} />
            </div>
        );
    };
};

export default LoginPage;