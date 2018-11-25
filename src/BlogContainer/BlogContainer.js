import React, { Component } from 'react';
import axios from 'axios';

import BlogList from '../BlogList/BlogList';
import YearIndex from '../YearIndex/YearIndex';

export default class BlogContainer extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            items: [],
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
            url: `https://api.godzzzzz.club/api/blogs/year/${year}`,
            data: {},
            cancelToken: new axios.CancelToken(function executor(c) {
                self.cancel = c;
            })
        }).then(function (response) {
            if (self._isMounted) {
                if (!response.data.length) {
                    
                }else {
                    self.setState({
                        items: response.data
                    });
                }
            }
        }).catch(function (error) {
            if (self._isMounted) {
                if (axios.isCancel(error)) {
                
                } else {
                    // handle error
                    
                }
            }            
        }).then(function () {
            
        });
    }

    handleYearClick = ({year}) => {
        this.cancel();
        const {handleYearChange} = this.props;
        handleYearChange(year);
        this.setState({
            items: []
        });
        const self = this;
        axios({
            method: 'get',
            url: `https://api.godzzzzz.club/api/blogs/year/${year}`,
            data: {},
            cancelToken: new axios.CancelToken(function executor(c) {
                // An executor function receives a cancel function as a parameter
                self.cancel = c;
            })
        }).then(function (response) {
            if (self._isMounted) {
                if (!response.data.length) {
                    
                }else {
                    self.setState({
                        items: response.data,
                    });
                }
                
            }
        }).catch(function (error) {
            if (self._isMounted) {
                if (axios.isCancel(error)) {
                    
                } else {
                    // handle error
                    
                }
            }            
        }).then(function () {
            
        });
    }

    render() {
        const {year} = this.props;
        const {items} = this.state;
        return (
            <main className={`app-content`}>
                <section className={`section is-storyworlds has-background is-medium  special-container`}>
                        <div className={`container`}>
                            <div className={`columns`}>
                                <YearIndex year={year} currentYear={year} handleYearClick={this.handleYearClick} />
                                <BlogList year={year} items={items}  />
                            </div>
                        </div>
                </section>
            </main>
        );
    }
}

