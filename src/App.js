import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main'
import './App.css';

export default class App extends Component {
  componentDidMount() {
    document.title = " ❤️ A Sort Of A Blog";
  }

  render() {
    return (
      <div className="app-container">
        <Header symbol={`❤️`} selectedIndex={0} />
        <Main />
      </div>
    );
  }
}
