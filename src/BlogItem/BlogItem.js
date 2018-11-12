import React, { Component } from 'react';
import LazyLoad from "vanilla-lazyload";
import '../App.css';
import '../Blog.css';

const CardHeader = ({number}) => (
    <div className="card-header bg-gray" href={`https://github.com/GodzzZZZ/GodzzZZZ.github.io/issues/${number}`}>
        <div className="card-image lazy" data-bg={`url(../blogImg/Blog${number}.jpg)`}></div>
    </div>
)

const CardBody = ({number, title, date_time, summary}) => (
    <div className="card-body">
        <a href={`https://github.com/GodzzZZZ/GodzzZZZ.github.io/issues/${number}`}>
            <div className="card-title"> {title} </div>
        </a>
        <div className="card-meta"> {date_time} </div>
        <div className="card-description">
            <p> {summary} </p>
        </div>
    </div>
)

const Card = ({number, title, date_time, summary}) => (
    <div className="card is-storyworld">
        <CardHeader number={number} />
        <CardBody number={number} title={title} date_time={date_time} summary={summary} />
        <CardFooter number={number} />
    </div>
)

const CardFooter = ({number}) => (
    <div className="card-footer">
        <a className="button is-primary is-outlined" href={`https://github.com/GodzzZZZ/GodzzZZZ.github.io/issues/${number}`}> Read now </a>
    </div>
)

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
                <Card number={number} title={title} date_time={date_time} summary={summary} />
            </div>
        );
    }
}
