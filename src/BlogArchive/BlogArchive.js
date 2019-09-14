import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import Header from '../Header/Header';
import Loading from '../Loading/Loading';
import '../config.js';

class ArchiveItem extends Component {
    render() {
        const {id, title, year, summary} = this.props;
        return (
            <li className={`item panic-item`}>
                <Link className={`archive-item`} to={`/blog/archive/${year}/${id}`} >
                    <div className={`title-container`}>
                        <span className={`sharp-num`}>#</span>
                        <span className={`sharp-num`} name={`id`}>{id}</span>
                        <span className={`sharp-num`}> - </span>
                        <span className={`title is-4 has-text-weight-normal panic-title`}>{title} </span>
                    </div>
                    <p className={`panic-summary`}>{summary}</p>
                </Link>
            </li>
        );
    }
}

const ArchiveContainer = ({loading, error, items, handleItemClick}) => (
    <div className={`columns has-equal-heights reverse`}>
        <div className={`column is-8 is-offset-2`}>
            <div className={`section-header`}>
                {
                    loading 
                    ? 
                    <Loading className={`detail-loading-container`} content={`Loading...`} />
                    :
                    error 
                    ?
                    <Loading className={`detail-loading-container`} content={`Kernel Panic.`} />
                    :
                    <ul className={`numbered-list`}>
                        {
                            items.map((item) => (
                                <ArchiveItem key={item.id} id={item.id} title={item.title} date={item.date} summary={item.summary} year={item.year} handleItemClick={handleItemClick}/>
                            ))
                        }
                    </ul>
                }
            </div>
        </div>                            
    </div>
);

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
                {
                    <div className={`app-content has-background`}>
                        <div className={`hero is-medium`}>
                            <div className={`hero-body kernel-panic`}>
                                <ArchiveContainer loading={loading} error={error} items={items} />
                            </div>
                        </div>                        
                    </div>
                }
            </div>
        );
    }
}