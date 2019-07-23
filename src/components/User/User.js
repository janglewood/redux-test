import React, { Component } from 'react';
import propTypes from 'prop-types';
import { LoginButton } from './styled';

export default class User extends Component {
    renderTemplate = () => {
        const { name, isFetching, error } = this.props;
        if (error) {
            return <p>ERROR</p>
        } else if (isFetching) {
            return <p>Loading...</p>
        } else if (name) {
            return <p>Hello, {name}!</p>
        } else {
            return (
                <LoginButton onClick={this.props.handleLogin}>Log In</LoginButton>
            )
        }
    }
    render() {
        return (
            <div>{this.renderTemplate()}</div>
        );
    }
}

User.propTypes = {
    name: propTypes.string.isRequired,
    isFetching: propTypes.bool.isRequired,
    error: propTypes.object,
    handleLogin: propTypes.func.isRequired,
};