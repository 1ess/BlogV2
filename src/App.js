import React, { Component } from 'react';

import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

import './App.css';

export default class App extends Component {

	componentDidMount() {
		document.title = " ❤️ A Sort Of A Blog";
		this.node.scrollIntoView();
	}

	render() {
		return (
		<div ref={node => this.node = node} className="app-container">
			<Header symbol={`❤️`} selectedIndex={0} />
			<Main />
			<Footer />
		</div>
		);
	}
}
