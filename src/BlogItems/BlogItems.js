import React, { Component, Fragment } from 'react';

import BlogItem from '../BlogItem/BlogItem';

export default class BlogItems extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transparent: true
        };
    }

    componentDidMount = () => {
        const self = this;
        setTimeout(function() {
            self.setState({
                transparent: false
            });
        }, 0);
    }
    

    render() {
        const {year, items} = this.props;
        const {transparent} = this.state;
        return (
            <div className={`columns is-multiline shuffle blog-alpha detail-alpha-zero`} style={{opacity: transparent ? 0 : 1}} id={`grid`}>
            { 
                <Fragment>
                {
                    items.map(item => (
                        <BlogItem year={year} key={item.id} number={``+ (item.tag)} title={item.title} date_time={item.date} summary={item.summary} />
                        )
                    )
                }
                </Fragment>
            }
            </div>
        );
    }
}