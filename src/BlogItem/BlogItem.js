import React, { Component } from 'react';
import LazyLoad from "vanilla-lazyload";
import {Link} from 'react-router-dom';

import '../App.css';
import '../Blog.css';
import '../config.js';

const CardHeader = ({number}) => (
    <div className="card-header bg-gray">
        <div className="card-image lazy" data-bg={`url(${global.constants.host}/blogImg/Blog${number}.jpg)`}></div>
    </div>
)

const CardBody = ({year, number, title, date_time, summary}) => (
    <div className="card-body">
        <Link to={`/blog/${year}/${number}`}>
            <div className="card-title"> {title} </div>
        </Link>
        <div className="card-meta"> {date_time} </div>
        <div className="card-description">
            <p> {summary} </p>
        </div>
    </div>
)

const CardFooter = ({year, number}) => (
    <div className="card-footer">
        <Link className="button is-primary is-outlined" to={`/blog/${year}/${number}`}> Read now </Link>
    </div>
)

const Card = ({year, number, title, date_time, summary}) => (
    <div className={`card is-storyworld`}>
        <CardHeader number={number} />
        <CardBody year={year} number={number} title={title} date_time={date_time} summary={summary} />
        <CardFooter year={year} number={number} />
    </div>
)

export default class BlogItem extends Component {
    componentDidMount(){
        new LazyLoad({
            elements_selector: ".lazy"
        });
    }

    render() {
        const { year, number, title, date_time, summary } = this.props;
        return (
            <div className="column is-6 is-4-widescreen is-flex shuffle-item shuffle-item--visible">
                <Card year={year} number={number} title={title} date_time={date_time} summary={summary} />
            </div>
        );
    }
}
