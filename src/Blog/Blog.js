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

  componentWillReceiveProps(props) {
    this.setState({
      index: props.match.params.index
    })
  }

  render() {
    return (
      <div className={`app-container`}>
        <Header symbol={`❤️`} selectedIndex={1} />
        <BlogContainer index={this.state.index} />
        <Footer />
      </div>
    );
  }
}

