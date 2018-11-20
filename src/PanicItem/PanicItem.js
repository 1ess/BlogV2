import React, { Component } from 'react';

export default class PanicItem extends Component {
    render() {
        const { index, title, date, summary } = this.props;
        return (
            <li className={`item panic-item`}>
                <h4 className={`title is-4 has-text-weight-normal panic-title`}> <span className={`sharp-num`}>#{index} - </span>{title} </h4>
                <h4 className={`subtitle panic-subtitle`}>{date}</h4>
                <p>{summary}</p>
            </li>
        );
    }
}