import React, { Component } from 'react';

import Header from '../Header/Header';
import BlogContainer from '../BlogContainer/BlogContainer';

export default class Blog extends Component {

	constructor(props){
		super(props);
		const {year} = this.props.match.params;
		this.state = {
			year
		};
	}

	componentDidMount = () => {
		this.node.scrollIntoView();
	}
  

	handleYearChange = (year) => {
		this.setState({
			year
		});
	}

	render() {
		const {year} = this.state;
		return (
			<div ref={node => this.node = node} className={`app-container`}>
				<Header symbol={`❤️`} selectedIndex={1} />
				<BlogContainer year={year} handleYearChange={this.handleYearChange}/>
			</div>
		);
	}
}

