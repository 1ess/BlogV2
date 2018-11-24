import React, { Component } from 'react';
import LazyLoad from "vanilla-lazyload";
import {Link} from 'react-router-dom';
import '../App.css';
import '../Blog.css';

const CardHeader = ({number}) => (
    <div className="card-header bg-gray">
        <div className="card-image lazy" data-bg={`url(../blogImg/Blog${number}.jpg)`}></div>
    </div>
)

const CardBody = ({index, number, title, date_time, summary}) => (
    <div className="card-body">
        <Link to={`/blog/${index}/${number}`}>
            <div className="card-title"> {title} </div>
        </Link>
        <div className="card-meta"> {date_time} </div>
        <div className="card-description">
            <p> {summary} </p>
        </div>
    </div>
)

const Card = ({index, number, title, date_time, summary}) => (
    <div className={`card is-storyworld`}>
        <CardHeader number={number} />
        <CardBody index={index} number={number} title={title} date_time={date_time} summary={summary} />
        <CardFooter index={index} number={number} />
    </div>
)

const CardFooter = ({index, number}) => (
    <div className="card-footer">
        <Link className="button is-primary is-outlined" to={`/blog/${index}/${number}`}> Read now </Link>
    </div>
)

export default class BlogItem extends Component {
    componentDidMount(){
        new LazyLoad({
            elements_selector: ".lazy"
        });
    }

    render() {
        const { index, number, title, date_time, summary } = this.props;
        return (
            <div className="column is-6 is-4-widescreen is-flex shuffle-item shuffle-item--visible">
                <Card index={index} number={number} title={title} date_time={date_time} summary={summary} />
            </div>
        );
    }
}
