import React, { Component, Fragment } from 'react';
import PanicItem from '../PanicItem/PanicItem';
import Header from '../Header/Header';
import Login from '../Login/Login';
import KernelPanicTitle from '../KernelPanicTitle/KernelPanicTitle';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import '../App.css';
import '../Blog.css';

const InputControl = ({title, type=`text`, placeholder, value, handleChange}) => {
    return (
        <div className={`columns full-container is-mobile`}>
            <div className={`column is-3`}><label className={`subtitle panic-subtitle tag-title`}>{title}</label></div>
            <div className={`column is-9`}><input className={`input is-medium`} type={type} placeholder={placeholder} value={value} onChange={handleChange}/></div>
        </div>
    );
}

const TextAreaControl = ({title, type=`text`, placeholder, value, handleChange}) => (
    <div className={`columns full-container is-mobile`}>
        <div className={`column is-3`}><label className={`subtitle panic-subtitle tag-title`}>{title}</label></div>
        <div className={`column is-9`}><textarea className={`textarea`} type={type} placeholder={placeholder} value={value} onChange={handleChange}/></div>
    </div>
);

const PanicContainer = ({isLoading, error, items, handleItemClick}) => (
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
                                <PanicItem key={item.id} id={item.id} tag={item.tag} prevTag={item.tag} title={item.title} prevTitle={item.title} date={item.date} prevDate={item.date} summary={item.summary} prevSummary={item.summary} year={item.year} prevYear={item.year} handleItemClick={handleItemClick}/>
                            ))
                        }
                    </ul>
                }
            </div>
        </div>                            
    </div>
);

const MenuListContainer = ({
                            showMenu, 
                            tag, 
                            title, 
                            year, 
                            date, 
                            summary, 
                            handleTagChange, 
                            handleTitleChange, 
                            handleYearChange, 
                            handleDateChange, 
                            handleSummaryChange
                            }) => (
    <div className={`columns has-equal-heights reverse`}>
        {
            showMenu
            ?
            <div className={`column is-8 is-offset-2`}>
                <div className={`rows`}>
                    <div className={`storybuilder`}>
                        <div className={`story-item`}>
                            <InputControl title={`#Tag`} type={`tel`} placeholder={`type Tag`} value={tag} handleChange={handleTagChange} />
                        </div>
                        <div className={`story-item`}>
                            <InputControl title={`#Ttitle`} placeholder={`type Ttitle`} value={title} handleChange={handleTitleChange} />
                        </div>
                        <div className={`story-item`}>
                            <InputControl title={`#Year`} placeholder={`type Year`} value={year} handleChange={handleYearChange} />
                        </div>
                        <div className={`story-item`}>
                            <InputControl title={`#Date`} placeholder={`type Date`} value={date} handleChange={handleDateChange} />
                        </div>
                        <div className={`story-item`}>
                            <TextAreaControl title={`#Summary`} placeholder={`type Summary`} value={summary} handleChange={handleSummaryChange} />
                        </div>
                    </div>
                </div>
            </div>
            :
            null
        }
    </div>
)

const MenuButtonContainer = ({
                             isLoading, 
                             showMenu, 
                             handleCancelClick, 
                             handleClick, 
                             createButtonLoading, 
                             cancelSymbol, 
                             symbol
                             }) => (
    <div className={`columns has-equal-heights reverse`}>
        {
            isLoading 
            || 
            <Fragment>
                <div className={`column is-4 is-offset-2`} style={showMenu ? {} : {display: `none`}}>
                    <button onClick={handleCancelClick} className={`button is-light`} ><span className ="emoji" role ="img" aria-label="heart">{cancelSymbol}</span>Cancel.</button>
                </div>
                <div className={(`column is-4 ` + (showMenu ? ``: `is-offset-4`)).trim()}>
                    <button onClick={handleClick} className={(`button is-warning ` + ((showMenu && createButtonLoading) ? `is-loading` : ``)).trim()} ><span className ="emoji" role ="img" aria-label="heart">{symbol}</span> 
                    {
                        showMenu ? `Ensure`: `Create`
                    }
                    .</button>
                </div>
            </Fragment>
        }
    </div>
)

const MenuContainer = ({ 
                        showMenu, 
                        tag, 
                        title, 
                        year, 
                        date, 
                        summary, 
                        handleTagChange, 
                        handleTitleChange, 
                        handleYearChange, 
                        handleDateChange, 
                        handleSummaryChange,
                        isLoading, 
                        handleCancelClick, 
                        handleClick, 
                        createButtonLoading, 
                        cancelSymbol, 
                        symbol
                        }) => (
    <Fragment>
        <MenuListContainer  
        showMenu={showMenu} 
        tag={tag} 
        title={title} 
        date={date} 
        year={year} 
        summary={summary} 
        handleTagChange={handleTagChange} 
        handleTitleChange={handleTitleChange} 
        handleDateChange={handleDateChange} 
        handleYearChange={handleYearChange} 
        handleSummaryChange={handleSummaryChange} 
        />
        <MenuButtonContainer 
        isLoading={isLoading} 
        showMenu={showMenu} 
        createButtonLoading={createButtonLoading} 
        cancelSymbol={cancelSymbol} 
        symbol={symbol}
        handleCancelClick={handleCancelClick} 
        handleClick={handleClick} 
        />
    </Fragment>
)

export default class KernelPanic extends Component {
    constructor(props) {
        super(props);
        const date = new Date();
        const year = date.getFullYear();
        this.state = {
            symbol: `🙌🏻`,
            cancelSymbol: `💫`,
            isLoading: true,
            error: false,
            items: [],
            
            title: '',
            date: '',
            summary: '',
            year,
            tag: '',

            showMenu: false,
            createButtonLoading: false,
            logined: false
        };
    }

    componentDidMount() {
        document.title = " ❤️ Kernel Panic";
        this.node.scrollIntoView();
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
            summary: '',
        }))
    }

    handleClick = (e) => {
        
        if (this.state.showMenu) {
            const { title, date, year, summary, tag } = this.state;
            if(!title || !date || !year || !summary || !tag) {
                toast.warn("😩 Type Full Field!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `error-toast`,
                    closeButton: false,
                    autoClose: 2000
                });
                return;
            }

            this.setState({
                createButtonLoading: true
            })
            
            const self = this;
            axios({
                method: 'post',
                url: 'https://api.godzzzzz.club/api/blogs',
                data: [{
                    title,
                    date,
                    summary,
                    year,
                    tag: parseInt(tag)
                }]
            }).then(function (response) {
                toast.success("🤗 Add Successful!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `success-toast`,
                    closeButton: false,
                    autoClose: 2000
                });
                self.setState({
                    showMenu: false,
                    isLoading: false,
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
                toast.error("😩 Add Failure!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `error-toast`,
                    closeButton: false,
                    autoClose: 2000
                });
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
        

    handleItemClick = ({ id, tag, title, date, summary, year, prevTag, prevTitle, prevDate, prevSummary, prevYear, tagRef, titleRef, dateRef, yearRef, summaryRef }) => {
        const self = this;
        if ((tag === String(prevTag)) && (title === prevTitle) && (date === prevDate) && (year === prevYear) && (summary === prevSummary)) {
            return;
        }

        if (tag === `fee1dead`) {
            axios({
                method: 'delete',
                url: `https://api.godzzzzz.club/api/blogs/${id}`,
                data: {}
            }).then(function (response) {
                toast.success("😂 Delete Successful!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `success-toast`,
                    closeButton: false,
                    autoClose: 2000
                });
                self.setState({
                    isLoading: false,
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
                toast.error("😱 Delete Failure!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `error-toast`,
                    closeButton: false,
                    autoClose: 2000
                });
                tagRef.current.innerText = prevTag;
                titleRef.current.innerText = prevTitle;
                dateRef.current.innerText = `  ` + prevDate;
                yearRef.current.innerText = prevYear;
                summaryRef.current.innerText = prevSummary;
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
                toast.success("😆 Update Successful!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `success-toast`,
                    closeButton: false,
                    autoClose: 2000
                });
                self.setState({
                    isLoading: false,
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
                toast.error("😰 Update Failure!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `error-toast`,
                    closeButton: false,
                    autoClose: 2000
                });
                tagRef.current.innerText = prevTag;
                titleRef.current.innerText = prevTitle;
                dateRef.current.innerText = `  ` + prevDate;
                yearRef.current.innerText = prevYear;
                summaryRef.current.innerText = prevSummary;
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

    handleLogin = () => {
        this.setState({
            logined: true
        });
    }

    render() {
        const { 
                items, symbol, cancelSymbol, isLoading, 
                error, showMenu, createButtonLoading,
                title, date, year, summary, tag, logined
              } = this.state;
        
        return (                
            <div ref={node => this.node = node} className={`app-container`}>
                <Header symbol={`❤️`} selectedIndex={2} />
                {
                    !logined
                    ?
                    <Login handleLogin={this.handleLogin} />
                    :
                    <div className={`app-content has-background`}>
                        <div className={`hero is-medium`}>
                            <div className={`hero-body kernel-panic`}>
                                <KernelPanicTitle />
                                <MenuContainer 
                                showMenu={showMenu} 
                                tag={tag} 
                                title={title} 
                                date={date} 
                                year={year} 
                                summary={summary} 
                                handleTagChange={this.handleTagChange} 
                                handleTitleChange={this.handleTitleChange} 
                                handleDateChange={this.handleDateChange} 
                                handleYearChange={this.handleYearChange} 
                                handleSummaryChange={this.handleSummaryChange}
                                isLoading={isLoading} 
                                createButtonLoading={createButtonLoading}
                                cancelSymbol={cancelSymbol} 
                                symbol={symbol}
                                handleCancelClick={this.handleCancelClick} 
                                handleClick={this.handleClick} 
                                />
                                <PanicContainer 
                                isLoading={isLoading} 
                                error={error} 
                                items={items} 
                                handleItemClick={this.handleItemClick} 
                                />
                            </div>
                        </div>                        
                    </div>
                }
                <ToastContainer transition={Zoom} />
            </div>
        );
    }
}