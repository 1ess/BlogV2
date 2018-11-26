import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        const {content, className} = this.props;
        return (
            <div className={className}>
                <p className={`kernel-is-loading loading-item`}>{content}</p>
            </div>
        );
    }
}