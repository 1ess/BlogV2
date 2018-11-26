import React, { Component } from 'react';

import BlogItems from '../BlogItems/BlogItems';
import Loading from '../Loading/Loading';

export default class BlogList extends Component {

    render() {
        const {year, items, loading, error, empty} = this.props;
        return (
            <div className={`column is-9 is-10-widescreen`}>
            {
                (
                    loading
                    ?
                    <Loading className={`loading-container`} content={`Loading...`} />
                    :
                    error
                    ?
                    <Loading className={`loading-container`} content={`Kernel Panic.`} />
                    :
                    empty
                    ?
                    <Loading className={`loading-container`} content={`No Content.`} />
                    :
                    <BlogItems year={year} items={items} />
                )
            }  
            </div>
        );
    }
}

