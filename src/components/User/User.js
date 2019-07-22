import React, { Component } from 'react';
import propTypes from 'prop-types';
import { UserGreet } from './styled';

export default class User extends Component {
    render() {
        const { name } = this.props;
        return (
            <UserGreet>
                <p>Hello, my name is {name}</p>
            </UserGreet>
        );
    }
}

User.propTypes = {
    name: propTypes.string.isRequired,
};