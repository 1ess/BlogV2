import React, { Component } from 'react';

export default class KernelPanicTitle extends Component {
    render() {
        return (
            <div className={`columns has-equal-heights reverse`}>
                <div className={`column is-8 is-offset-2`}>
                    <div className={`section-header`}>
                        <h2 className={`title has-text-centered is-spaced`}> 
                            Content Management 
                            <span className={`spacer is-horizontal is-05`}> </span>
                            <span className={`tag is-warning is-uppercase`}>Beta</span>
                        </h2>
                    </div>
                </div>                            
            </div>
        );
    }
}