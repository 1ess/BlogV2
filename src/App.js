import React, { Component, Suspense } from 'react';
import './App.css';
import Header from './Header/Header';

const Main = React.lazy(() => import("./Main/Main"));
const Footer = React.lazy(() => import("./Footer/Footer"));

export default class App extends Component {

	componentDidMount() {
		document.title = "A Sort Of A Blog";
		this.node.scrollIntoView();
	}

	render() {
		return (
		<div ref={node => this.node = node} className="app-container">
			<Header symbol={`❤️`} selectedIndex={0} />
			<Suspense fallback={<div></div>}>
				<Main />
				<Footer />
			</Suspense>
			
		</div>
		);
	}
}
