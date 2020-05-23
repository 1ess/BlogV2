import React, { Component } from 'react';
import axios from 'axios';

import Loading from '../Loading/Loading';
import BlogDetailContainer from '../BlogDetailContainer/BlogDetailContainer';
import '../config.js';

export default class BlogPage extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this._isMounted = true;
        console.log();
        this.state = {
            title: ``,
            content: ``,
            loading: true,
            error: false,
            archive: (props.match.url.indexOf('archive') !== -1)
        };
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        document.title = "Blog";
        const {id} = this.props.match.params;
        this.node.scrollIntoView();
        const self = this;
        axios({
            method: 'get',
            url: `${global.constants.host}/api/detail/${id}`,
            data: {}
        }).then(function (response) {
            if (self._isMounted) {
                if (!response.data.result.code) {
                    const detail = response.data.detail;
                    document.title = `${detail.title}`;
                    self.setState({
                        title: detail.title,
                        content: detail.content
                    });
                }else {
                    self.setState({
                        error: true
                    });
                }
            }
        }).catch(function () {
            if (self._isMounted) {
                self.setState({
                    error: true
                });
            }
        }).then(function () {
            if (self._isMounted) {
                self.setState({
                    loading: false                
                });
            }
        });
    }
    
    render() {
        const {title, content, loading, error} = this.state;
        return (
            <div ref={node => this.node = node} className={`app-container`}>
                <main className={`app-content has-background`}>
                    <section className={`section is-storyworlds has-background is-medium special-container`}>
                        <div className="container">
                            <div className={`columns is-centered`}>
                                <div className={`column is-7-fullhd is-9-widescreen is-10-tablet`}>
                                    {
                                        loading
                                        ?
                                        <Loading className={`detail-loading-container`} content={`Loading...`} />
                                        :
                                        error
                                        ?
                                        <Loading className={`detail-loading-container`} content={`Kernel Panic.`} />
                                        :
                                        <BlogDetailContainer title={title} content={content} />
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
    }
}