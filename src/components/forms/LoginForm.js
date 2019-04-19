import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Message } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        state = {
            data: {
                email: '',
                passwords: ''
            },
            loading: false,
            errors: {}
        };
    }

    onChange = e => {
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value}
        });
    };

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.props.submit(this.state.data);
        }
    };

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
        if (!data.password) errors.password = "Oops!!! Empty Field";
        return errors;
    }

    render() {
        const {data, errors} = this.state;
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email"
                    placeholder="user@email.com"
                    id="email"
                    value={data.email}
                    onChange={this.onChange}
                    // required
                />
                {errors.email && <InlineError text={errors.email} />} 
                </Form.Field>
            
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    placeholder="secured"
                    id="password"
                    value={data.password}
                    onChange={this.onChange}
                    // required
                /> 
                {errors.password && <InlineError text={errors.password} />} 
                </Form.Field>
                <Button primary>Login</Button>
            </Form>
        );
    };
};

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;