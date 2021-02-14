import React, { Component } from 'react';

import Info from '../InfoSection/Info';

import '../App.css';

export default class Main extends Component {
	render() {
		return (
			<main className="app-content has-background container-bg">
				<Info blog_link={`/blog/2018`} />
			</main>
		);
	}
}