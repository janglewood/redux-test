import React, {Component} from 'react';
import { connect } from 'react-redux';
import Page from '../components/Page/Page';
import { getPhotos } from '../actions/PageActions';

class PageContainer extends Component {
    render() {
        const { page, getPhotos } = this.props;
        return (
            <Page
                photos={page.photos}
                year={page.year}
                isFetching={page.isFetching}
                error={page.error}
                getPhotos={getPhotos}
            />
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getPhotos: year => dispatch(getPhotos(year)),
    }
};

const mapStateToProps = store => {
    return {
        page: store.page,
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageContainer);