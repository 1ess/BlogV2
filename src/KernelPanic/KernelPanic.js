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
            cancelSymbol: `💫`,
            isLoading: true,
            error: false,
            items: [],
            
            title: '',
            date: '',
            summary: '',
            year: '',
            tag: '',
            
            showMenu: false,
            createButtonLoading: false
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
                error: false,
                tag: response.data.length + 1
            })
        }).catch(function (error) {
            self.setState({
                isLoading: false,
                error: true
            })
        }).then(function () {
            
        })
    }

    handleCancelClick = () => {
        this.setState((prevState)=>({
            showMenu: false,
            title: '',
            date: '',
            year: '',
            summary: '',
        }))
    }

    handleClick = (e) => {
        
        if (this.state.showMenu) {
            this.setState({
                createButtonLoading: true
            })
            
            const { title, date, year, summary, tag } = this.state;
            const self = this;
            axios({
                method: 'post',
                url: 'https://api.godzzzzz.club/api/blogs',
                data: [{
                    title: title,
                    date: date,
                    summary: summary,
                    year: year,
                    tag: parseInt(tag)
                }]
            }).then(function (response) {
                self.setState({
                    showMenu: false,
                    isLoading: true,
                    error: false
                });
                axios({
                    method: 'get',
                    url: 'https://api.godzzzzz.club/api/blogs/year/all',
                    data: {}
                }).then(function (response) {
                    self.setState({
                        items: response.data,
                        isLoading: false,
                        error: false,
                        tag: response.data.length + 1,
                        title: '',
                        date: '',
                        year: '',
                        summary: '',
                    })
                }).catch(function (error) {
                    self.setState({
                        isLoading: false,
                        error: true
                    })
                }).then(function () {
                    
                })
            }).catch(function (error) {
                self.setState({
                    showMenu: false
                })
            }).then(function () {
                self.setState({
                    createButtonLoading: false
                })
            })
        }else {
            this.setState((prevState)=>({
                showMenu: !prevState.showMenu
            }))
        }
    }
        

    handleItemClick = ({ id, tag, title, date, summary, year }) => {
        const self = this;
        if (tag === `fee1dead`) {
            axios({
                method: 'delete',
                url: `https://api.godzzzzz.club/api/blogs/${id}`,
                data: {}
            }).then(function (response) {
                self.setState({
                    isLoading: true,
                    error: false
                });
                axios({
                    method: 'get',
                    url: 'https://api.godzzzzz.club/api/blogs/year/all',
                    data: {}
                }).then(function (response) {
                    self.setState({
                        items: response.data,
                        isLoading: false,
                        error: false,
                        tag: response.data.length + 1
                    })
                }).catch(function (error) {
                    self.setState({
                        isLoading: false,
                        error: true
                    })
                }).then(function () {
                })
                
            }).catch(function (error) {
            }).then(function () {
            })
        }else {
            axios({
                method: 'put',
                url: 'https://api.godzzzzz.club/api/blogs',
                data: {
                    id,
                    date,
                    title,
                    summary,
                    year,
                    tag
                }
            }).then(function (response) {
                
                self.setState({
                    isLoading: true,
                    error: false
                });
                axios({
                    method: 'get',
                    url: 'https://api.godzzzzz.club/api/blogs/year/all',
                    data: {}
                }).then(function (response) {
                    self.setState({
                        items: response.data,
                        isLoading: false,
                        error: false,
                        tag: response.data.length + 1
                    })
                }).catch(function (error) {
                    self.setState({
                        isLoading: false,
                        error: true
                    })
                }).then(function () {
                })
                
            }).catch(function (error) {
            }).then(function () {
            })
        }
    }

    handleTagChange = (e) => {
        this.setState({
            tag: e.target.value
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    handleYearChange = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleSummaryChange = (e) => {
        this.setState({
            summary: e.target.value
        })
    }

    render() {
        const { 
                items, symbol, cancelSymbol, isLoading, 
                error, showMenu, createButtonLoading,
                title, date, year, summary, tag 
              } = this.state;
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
                                    </div>
                                </div>                            
                            </div>
                            <div className={`columns has-equal-heights reverse`}>
                            {
                                showMenu
                                ?
                                <div className={`column is-4 is-offset-4`}>
                                    <div className={`rows`}>
                                        <div className={`field row`}>
                                            <div className={`control`}>
                                                <div className={`columns`}>
                                                    <div className={`column is-3`}><label className={`subtitle panic-subtitle`}># Tag</label></div>
                                                    <div className={`column is-9`}><input className={`input is-medium`} type="tel" placeholder="type Tag" value={tag} onChange={this.handleTagChange}/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`field row`}>
                                            <div className={`control`}>
                                                <div className={`columns`}>
                                                    <div className={`column is-3`}><label className={`subtitle panic-subtitle`}># Ttitle</label></div>
                                                    <div className={`column is-9`}><input className={`input is-medium`} type="text" placeholder="type Ttitle" value={title} onChange={this.handleTitleChange}/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`field row`}>
                                            <div className={`control`}>
                                                <div className={`columns`}>
                                                    <div className={`column is-3`}><label className={`subtitle panic-subtitle`}># Year</label></div>
                                                    <div className={`column is-9`}><input className={`input is-medium`} type="text" placeholder="type Year" value={year} onChange={this.handleYearChange}/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`field row`}>
                                            <div className={`control`}>
                                                <div className={`columns`}>
                                                    <div className={`column is-3`}><label className={`subtitle panic-subtitle`}># Date</label></div>
                                                    <div className={`column is-9`}><input className={`input is-medium`} type="text" placeholder="type Date" value={date} onChange={this.handleDateChange}/></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`field row`}>
                                            <div className={`control`}>
                                                <div className={`columns`}>
                                                    <div className={`column is-3`}><label className={`subtitle panic-subtitle`}># Summary</label></div>
                                                    <div className={`column is-9`}><textarea className={`textarea`} type="text" placeholder="type Summary" value={summary} onChange={this.handleSummaryChange}/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                :
                                null
                            }
                            </div>
                            <div className={`columns has-equal-heights reverse`}>
                                {
                                    isLoading 
                                    || 
                                    <Fragment>
                                        <div className={`column is-2 is-offset-4`} style={showMenu ? {} : {display: `none`}}>
                                            <button onClick={this.handleCancelClick} className={`button is-light`} ><span className ="emoji" role ="img" aria-label="heart">{cancelSymbol}</span>Cancel.</button>
                                        </div>
                                        <div className={(`column is-2 ` + (showMenu ? ``: `is-offset-5`)).trim()}>
                                            <button onClick={this.handleClick} className={(`button is-warning ` + ((showMenu && createButtonLoading) ? `is-loading` : ``)).trim()} ><span className ="emoji" role ="img" aria-label="heart">{symbol}</span> 
                                            {
                                                showMenu ? `Ensure`: `Create`
                                            }
                                            .</button>
                                        </div>
                                    </Fragment>
                                }
                            </div>
                            
                            <div className={`columns has-equal-heights reverse`}>
                                <div className={`column is-8 is-offset-2`}>
                                    <div className={`section-header`}>
                                        {
                                            isLoading 
                                            ? 
                                            <p className={`has-text-centered kernel-is-loading`}>Loading ...</p>
                                            :
                                            error 
                                            ?
                                            <p className={`has-text-centered kernel-is-loading`}>Kernel Panic</p>
                                            :
                                            <ul className={`numbered-list`}>
                                                {
                                                    items.map((item) => (
                                                        <PanicItem key={item.id} id={item.id} tag={item.tag} title={item.title} date={item.date} summary={item.summary} year={item.year} handleItemClick={this.handleItemClick}/>
                                                    ))
                                                }
                                            </ul>
                                        }
                                    </div>
                                </div>                            
                            </div>
                        </div>
                    </div>                        
                </div>
            </div>
        );
    }
}