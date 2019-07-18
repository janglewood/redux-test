import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { name, surname, age } = this.props.user;
    const hobby = this.props.hobby.main;
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Top of my photo</h1>
        </header>
        <p>Hello from App, {name} {surname}</p>
        <p>You're not old, it's only {age}</p>
        <p>Are you really do {hobby}?</p>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store);
  return {
    user: store.user,
    hobby: store.hobby.main,
  }
}

export default connect(mapStateToProps)(App);
