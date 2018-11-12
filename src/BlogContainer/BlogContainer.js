import React, { Component } from 'react';
import BlogList from '../BlogList/BlogList';
import YearIndex from '../YearIndex/YearIndex'

export default class BlogContainer extends Component {
  render() {
    const {index} = this.props;
    return (
        <main className={`app-content`}>
            <section className={`section is-storyworlds has-background is-medium  special-container`}>
                    <div className={`container`}>
                        <div className={`columns`}>
                            <YearIndex index={index}/>
                            <BlogList index={index}/>
                        </div>
                    </div>
            </section>
        </main>
    );
  }
}

