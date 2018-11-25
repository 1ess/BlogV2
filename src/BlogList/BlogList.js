import React, { Component, Fragment } from 'react';
import BlogItem from '../BlogItem/BlogItem';

export default class BlogList extends Component {

    render() {
        const {year, items} = this.props;
        return (
            <div className={`column is-9 is-10-widescreen`}>
            {
                (
                    <div className={`columns is-multiline shuffle blog-alpha`} id={`grid`}>
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
                )
            }  
            </div>
        );
    }
}

