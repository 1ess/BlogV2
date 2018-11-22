import React, { Component } from 'react';
import Header from '../Header/Header';
import BlogContainer from '../BlogContainer/BlogContainer'
import Footer from '../Footer/Footer'

export default class Blog extends Component {

  constructor(props){
    super(props);
    this.state = {
      	index: this.props.match.params.index
    }
  }

  handleYearChange = (index) => {
    this.setState({
    	index: index
    })
  }

  render() {
    return (
		<div className={`app-container`}>
			<Header symbol={`❤️`} selectedIndex={1} />
			<BlogContainer index={this.state.index} handleYearChange={this.handleYearChange}/>
			<Footer />
		</div>
    );
  }
}

