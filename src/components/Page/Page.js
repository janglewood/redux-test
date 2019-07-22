import React, { Component } from 'react';
import propTypes from 'prop-types';
import { YearButton,
        ButtonContainer,
        PageContainer,
        PhotoInfo,
} from './styled';

export default class Page extends Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText;
        this.props.setYear(year);
    }

    render() {
        const { year, photos } = this.props;
        return (
            <PageContainer>
                <ButtonContainer>
                    <YearButton onClick={this.onBtnClick}>2012</YearButton>
                    <YearButton onClick={this.onBtnClick}>2013</YearButton>
                    <YearButton onClick={this.onBtnClick}>2014</YearButton>
                    <YearButton onClick={this.onBtnClick}>2015</YearButton>
                    <YearButton onClick={this.onBtnClick}>2016</YearButton>
                    <YearButton onClick={this.onBtnClick}>2017</YearButton>
                    <YearButton onClick={this.onBtnClick}>2018</YearButton>
                    <YearButton onClick={this.onBtnClick}>2019</YearButton>
                </ButtonContainer>
                <PhotoInfo>You have {photos.length} photos from {year} year</PhotoInfo>
            </PageContainer>

        );
    }
}

Page.propTypes = {
    photos: propTypes.array.isRequired,
    year: propTypes.number.isRequired,
    setYear: propTypes.func.isRequired,
}