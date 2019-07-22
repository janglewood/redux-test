import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class User extends Component {
    render() {
        const { name } = this.props;
        return (
            <div className='user'>
                <p>Hello, my name is {name}</p>
            </div>
        );
    }
}

User.propTypes = {
    name: propTypes.string.isRequired,
};