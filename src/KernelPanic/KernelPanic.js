import React, { Component, Fragment } from 'react';
import PanicItem from '../PanicItem/PanicItem';
import Header from '../Header/Header';
import axios from 'axios';

import '../App.css';

export default class KernelPanic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            symbol: `🙌🏻`,
            isLoading: true,
            error: false,
            items: [],
            newBlog: {
                title: '',
                date: '',
                summary: '',
                year: '',
                tag: 0,
            }
        };
    }

    componentDidMount() {
        document.title = " ❤️ Kernel Panic";
        const self = this;
        axios({
            method: 'get',
            url: 'https://api.godzzzzz.club/api/blogs/year/all',
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

    handleClick = (e) => {
        // const { newBlog } = this.state;
        // const self = this;
        // axios({
        //     method: 'post',
        //     url: 'https://api.godzzzzz.club/api/blogs',
        //     data: [{
        //         title: newBlog.title,
        //         date: newBlog.date,
        //         summary: newBlog.summary,
        //         year: newBlog.year,
        //         tag: newBlog.tag
        //     }]
        // }).then(function (response) {
        //     self.setState((prevState, props) => (
        //         {
        //             items: [...prevState.items, prevState.newBlog]
        //         }
        //     ))
        // }).catch(function (error) {
            
        // }).then(function () {
            
        // })
    }

    render() {
        const { items, symbol, isLoading, error }= this.state;
        return (                
            <div className={`app-container`}>
                <Header symbol={`❤️`} selectedIndex={3} />
                <div className={`app-content has-background`}>
                    <div className={`hero is-medium`}>
                        <div className={`hero-body kernel-panic`}>
                            <div className={`columns has-equal-heights reverse`}>
                                <div className={`column is-8 is-offset-2`}>
                                    <div className={`section-header`}>
                                        <h2 className={`title has-text-centered is-spaced`}> 
                                            Content Management 
                                            <span className={`spacer is-horizontal is-05`}> </span>
                                            <span className={`tag is-warning is-uppercase`}>Beta</span>
                                        </h2>
                                        {
                                            isLoading 
                                            ? 
                                            <p className={`has-text-centered is-loading`}>Loading ...</p>
                                            :
                                            error 
                                            ?
                                            <p className={`has-text-centered is-loading`}>加载失败</p>
                                            :
                                            <ul className={`numbered-list`}>
                                                {
                                                    items.map((item, index) => (
                                                        <PanicItem key={item.id} index={item.tag} title={item.title} date={item.date} summary={item.summary}/>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                </div>                            
                            </div>
                            <div className={`columns has-equal-heights reverse`}>
                                {
                                    isLoading 
                                    || 
                                    (
                                    <div className={`column is-2 is-offset-8`}>
                                        <button onClick={this.handleClick} className={`button is-warning`} ><span className ="emoji" role ="img" aria-label="heart">{symbol}</span> Create.</button>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>
        );
    }
}