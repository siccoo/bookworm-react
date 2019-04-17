import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class LoginForm extends React.Component {
    state = {
        data: {
            email: '',
            passwords: ''
        },
        loading: false,
        errors: {}
    };

    onChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value}
        });
    };

    render() {
        const {data} = this.state;
        return (
            <Form>
                <Form.Field>
                    <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    id="email"
                    value={data.email}
                    onChange={this.onChange}
                    required
                /> 
                </Form.Field>
            
                <Form.Field>
                    <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    placeholder="secured"
                    id="password"
                    value={data.password}
                    onChange={this.onChange}
                    required
                /> 
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    };
};

export default LoginForm;