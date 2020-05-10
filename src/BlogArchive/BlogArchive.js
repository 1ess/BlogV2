import React, { Component, Suspense } from 'react';
import axios from 'axios';

import Header from '../Header/Header';
import '../config.js';

const BlogArchiveContainer = React.lazy(() => import("../BlogArchiveContainer/BlogArchiveContainer"));



export default class BlogArchive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            error: false,
            logined: false,
            items: []
        };
    }

    componentDidMount() {
        document.title = " ❤️ Archive";
        this.node.scrollIntoView();
        const self = this;
        axios({
            method: 'get',
            url: `${global.constants.host}/api/blogs/year/all`,
            data: {}
        }).then(function (response) {
            self.setState({
                items: response.data,
                loading: false,
                error: false,
            })
        }).catch(function () {
            self.setState({
                loading: false,
                error: true
            })
        }).then(function () {
            
        })
    }
    render() {
        const { items, loading, error } = this.state;
        return (                
            <div ref={node => this.node = node} className={`app-container`}>
                <Header symbol={`❤️`} selectedIndex={2} />
                <Suspense fallback={<div></div>}>
                    <BlogArchiveContainer loading={loading} error={error} items={items} />
                </Suspense>
            </div>
        );
    }
}