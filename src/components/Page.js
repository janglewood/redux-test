import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Page extends Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.setYear(year);
    }

    render() {
        const { year, photos } = this.props;
        return (
            <div className='page'>
                <button className='year-button' onClick={this.onBtnClick}>2012</button>
                <button className='year-button' onClick={this.onBtnClick}>2013</button>
                <button className='year-button' onClick={this.onBtnClick}>2014</button>
                <button className='year-button' onClick={this.onBtnClick}>2015</button>
                <button className='year-button' onClick={this.onBtnClick}>2016</button>
                <button className='year-button' onClick={this.onBtnClick}>2017</button>
                <button className='year-button' onClick={this.onBtnClick}>2018</button>
                <button className='year-button' onClick={this.onBtnClick}>2019</button>
                <p>You have {photos.length} photos from {year} year</p>
            </div>
        );
    }
}

Page.propTypes = {
    photos: propTypes.array.isRequired,
    year: propTypes.number.isRequired,
    setYear: propTypes.func.isRequired,
}