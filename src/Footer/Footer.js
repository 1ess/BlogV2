import React, { Component } from 'react';
import footer from '../footer.png';
import '../Blog.css';

export default class Blog extends Component {
  render() {
    return (
        <footer className="has-background">
            <img id="blog-footer" src={footer} alt="" />
        </footer>
    );
  }
}

