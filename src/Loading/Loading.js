import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        const {content} = this.props;
        return (
            <div className={`loading-container`}>
                <p className={`kernel-is-loading loading-item`}>{content}</p>
            </div>
        );
    }
}