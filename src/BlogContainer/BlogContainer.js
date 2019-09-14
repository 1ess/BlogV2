import React, { Component } from 'react';
import axios from 'axios';

import BlogList from '../BlogList/BlogList';
import YearIndex from '../YearIndex/YearIndex';
import '../config.js';

export default class BlogContainer extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: true,
            error: false,
            empty: false,
            transparent: true
        };
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        const self = this;
        const {year} = this.props;
        axios({
            method: 'get',
            url: `${global.constants.host}/api/blogs/year/${year}`,
            data: {},
            cancelToken: new axios.CancelToken(function executor(c) {
                self.cancel = c;
            })
        }).then(function (response) {
            if (self._isMounted) {
                if (!response.data.length) {
                    self.setState({
                        items: [],
                        loading: false,
                        error: false,
                        empty: true,
                        transparent: true
                    });
                }else {
                    self.setState({
                        items: response.data,
                        loading: false,
                        error: false,
                        empty: false,
                        transparent: false
                    });
                }
            }
        }).catch(function (error) {
            if (self._isMounted) {
                if (axios.isCancel(error)) {
                } else {
                    // handle error
                    self.setState({
                        items: [],
                        loading: false,
                        error: true,
                        empty: false,
                        transparent: true
                    });
                }
            }            
        })
    }

    handleYearClick = ({year}) => {
        this.cancel();
        const {handleYearChange} = this.props;
        handleYearChange(year);
        this.setState({
            items: [],
            loading: true,
            error: false,
            empty: false,
            transparent: true
        });
        const self = this;
        axios({
            method: 'get',
            url: `${global.constants.host}/api/blogs/year/${year}`,
            data: {},
            cancelToken: new axios.CancelToken(function executor(c) {
                self.cancel = c;
            })
        }).then(function (response) {
            if (self._isMounted) {
                if (!response.data.length) {
                    self.setState({
                        items: [],
                        loading: false,
                        error: false,
                        empty: true,
                        transparent: true
                    });
                }else {
                    self.setState({
                        items: response.data,
                        loading: false,
                        error: false,
                        empty: false,
                        transparent: false
                    });
                }
            }
        }).catch(function (error) {
            if (self._isMounted) {
                if (axios.isCancel(error)) {
                } else {
                    // handle error
                    self.setState({
                        items: [],
                        loading: false,
                        error: true,
                        empty: false,
                        transparent: true
                    });
                }
            }           
        })
    }

    render() {
        const {year} = this.props;
        const {items, loading, error, empty, transparent} = this.state;
        return (
            <main className={`app-content`}>
                <section className={`section is-storyworlds has-background is-medium  special-container`}>
                        <div className={`container`}>
                            <div className={`columns`}>
                                <YearIndex year={year} currentYear={year} handleYearClick={this.handleYearClick} />
                                {
                                    <BlogList year={year} items={items} loading={loading} error={error} empty={empty} transparent={transparent} />
                                }
                            </div>
                        </div>
                </section>
            </main>
        );
    }
}

