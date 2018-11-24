import React, { Component, Fragment } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import axios from 'axios';
import '../App.css';
import '../Blog.css';

export default class Blog2018 extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this._isMounted = true;
        this.state = {
            items: []
        };
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        const self = this;
        const {handleAlphaChange} = this.props;
        
        axios({
            method: 'get',
            url: 'https://api.godzzzzz.club/api/blogs/year/2018',
            data: {}
        }).then(function (response) {
            if (self._isMounted) {
                self.setState({
                    items: response.data
                });
                handleAlphaChange(1);
            }
        }).catch(function (error) {
            
        }).then(function () {
            
        });
    }

    render() {
        const { items } = this.state;
        const { index } = this.props;
        return (
            <Fragment>
                {
                    items.map(item => (
                        <BlogItem index={index} key={item.id} number={``+ (item.tag)} title={item.title} date_time={item.date} summary={item.summary} />
                        )
                    )
                }
            </Fragment>
        );
    }
}

