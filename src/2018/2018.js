import React, { Component, Fragment } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import axios from 'axios';
import '../App.css';
import '../Blog.css';

export default class Blog2018 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: true,
            error: false
        }
    }

    componentDidMount() {
        console.log(2);
        const self = this;
        axios({
            method: 'get',
            url: 'https://api.godzzzzz.club/api/blogs/year/2018',
            data: {}
        }).then(function (response) {
            self.setState({
                items: response.data,
                isLoading: false,
                error: false
            })
        }).catch(function (error) {
            self.setState({
                isLoading: false,
                error: true
            })
        }).then(function () {
            
        })
    }

    render() {
        const {items, isLoading, error} = this.state;
        return (
            <Fragment>
                {
                    isLoading 
                    ? 
                    <p className={`is-loading`}>Loading ...</p>
                    :
                    error 
                    ?
                    <p className={`is-loading`}>加载失败</p>
                    :
                    !items.length
                    ?
                    <p className={`is-loading`}>Kernel Panic</p>
                    :
                    items.map((item, index)=>(<BlogItem key={item.id} number={``+ (item.tag)} title={item.title} date_time={item.date} summary={item.summary} />))
                }
            </Fragment>
        );
    }
}

