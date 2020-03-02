import React, { Component } from 'react';

import Info from '../InfoSection/Info';
import Line from '../Line/Line';
import Contribution from '../ContributionSection/Contribution';
import Wechat from '../WeChatSection/WeChat';

import '../App.css';

export default class Main extends Component {
	render() {
		return (
			<main className="app-content has-background">
				<Info blog_link={`/blog/2018`} />
			</main>
		);
	}
}