import React, { Component } from 'react';
import propTypes from 'prop-types';
import { UserGreet } from './styled';

export default class User extends Component {
    loginClick() {
        this.props.handleLogin();
    }
    render() {
        const { name } = this.props;
        return (
            <UserGreet onClick={this.loginClick}>
                <p>Hello, my name is {name}</p>
            </UserGreet>
        );
    }
}

User.propTypes = {
    name: propTypes.string.isRequired,
};