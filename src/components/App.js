import React, { Component } from 'react';
import UserContainer from '../containers/UserContainer';
import PageContainer from '../containers/PageContainer';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <UserContainer />
        <PageContainer />
      </div>
    );
  }
}

export default App;
