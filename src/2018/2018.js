import React, { Component, Fragment } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import axios from 'axios';
import '../App.css';
import '../Blog.css';

export default class Blog2018 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        const self = this;
        const {handleAlphaChange} = this.props;
        axios({
            method: 'get',
            url: 'https://api.godzzzzz.club/api/blogs/year/2018',
            data: {}
        }).then(function (response) {
            self.setState({
                items: response.data
            });
            handleAlphaChange(1);
        }).catch(function (error) {
            
        }).then(function () {
        });
    }

    render() {
        const { items } = this.state;
        return (
            <Fragment>
                {
                    items.map(item => (
                        <BlogItem key={item.id} number={``+ (item.tag)} title={item.title} date_time={item.date} summary={item.summary} />
                        )
                    )
                }
            </Fragment>
        );
    }
}

