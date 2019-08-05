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
        this.props.getPhotos(year);
    }

    create

    render() {
        const { year, photos, isFetching } = this.props;
        const currentYearPhotosInfo = photos.filter(item => new Date(item.date * 1000).getFullYear() === year);
        const sortedPhotosInfo = currentYearPhotosInfo.sort((a, b) => b.likes.count - a.likes.count);
        console.log(sortedPhotosInfo);
        const currentYearPhotos = currentYearPhotosInfo.map(item => {
            const image = <img src={item.sizes[item.sizes.length - 1].url} width="200px" height="200px" alt="VKpic"></img>;
            return <div key={item.id}>{image}<p>{item.likes.count}❤</p></div>
        });
        return (
            <PageContainer>
                <ButtonContainer>
                    <YearButton onClick={this.onBtnClick}>2011</YearButton>
                    <YearButton onClick={this.onBtnClick}>2012</YearButton>
                    <YearButton onClick={this.onBtnClick}>2013</YearButton>
                    <YearButton onClick={this.onBtnClick}>2014</YearButton>
                    <YearButton onClick={this.onBtnClick}>2015</YearButton>
                    <YearButton onClick={this.onBtnClick}>2016</YearButton>
                    <YearButton onClick={this.onBtnClick}>2017</YearButton>
                    <YearButton onClick={this.onBtnClick}>2018</YearButton>
                    <YearButton onClick={this.onBtnClick}>2019</YearButton>
                </ButtonContainer>
                <PhotoInfo>{year} year</PhotoInfo>
                <div>
                    {isFetching ? <p>Loading...</p> : <div><p>You have {currentYearPhotos.length} photo for {year} year</p>{currentYearPhotos}</div>}
                </div>
            </PageContainer>
        );
    }
}

Page.propTypes = {
    photos: propTypes.array.isRequired,
    year: propTypes.number.isRequired,
    getPhotos: propTypes.func.isRequired,
    isFetching: propTypes.bool.isRequired,
}