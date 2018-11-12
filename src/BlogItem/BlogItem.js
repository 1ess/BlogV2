import React, { Component } from 'react';
import LazyLoad from "vanilla-lazyload";
import '../App.css';
import '../Blog.css';

export default class BlogItem extends Component {
    componentDidMount(){
        new LazyLoad({
            elements_selector: ".lazy"
        });
    }

    render() {
        const { number , title, date_time, summary } = this.props;
        return (
            <div className="column is-6 is-4-widescreen is-flex shuffle-item shuffle-item--visible">
                <div className="card is-storyworld">
                    <div className="card-header bg-gray" href={`https://github.com/GodzzZZZ/GodzzZZZ.github.io/issues/${number}`}>
                        <div className="card-image lazy" data-bg={`url(../blogImg/Blog${number}.jpg)`}></div>
                    </div>
                    <div className="card-body">
                        <a href={`https://github.com/GodzzZZZ/GodzzZZZ.github.io/issues/${number}`}>
                            <div className="card-title"> {title} </div>
                        </a>
                        <div className="card-meta"> {date_time} </div>
                        <div className="card-description">
                            <p> {summary} </p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <a className="button is-primary is-outlined" href={`https://github.com/GodzzZZZ/GodzzZZZ.github.io/issues/${number}`}> Read now </a>
                    </div>
                </div>
            </div>
        );
    }
}
