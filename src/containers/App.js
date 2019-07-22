import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User/User';
import Page from '../components/Page/Page';
import { getPhotos } from '../actions/PageActions';
import { handleLogin } from '../actions/UserActions';
import '../App.css';

class App extends Component {
  render() {
    const { user, page, getPhotosAction, handleLoginAction} = this.props;
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Top of my photo</h1>
        </header>
        <User
          name={user.name}
          handleLogin={handleLoginAction}
        />
        <Page
          photos={page.photos}
          year={page.year}
          getPhotos={getPhotosAction}
          isFetching={page.isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  }
}

const mapDispatchToProps = dispatch => ({
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: username => dispatch(handleLogin(username)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
