import React, { Component } from 'react';
import Blog2018 from '../2018/2018'
import Blog2019 from '../2019/2019'

export default class BlogList extends Component {
    render() {
        const {index} = this.props;
        return (
            <div className="column is-9 is-10-widescreen">
                { 
                    index === `2018`? 
                    <Blog2018 />
                    :index === `2019`?
                    <Blog2019 />
                    :null
                }
            </div>
        );
    }
}

