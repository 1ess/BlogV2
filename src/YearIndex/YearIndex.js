import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../App.css';
import '../Blog.css';

export default class YearIndex extends Component {

    componentDidMount = () => {
        document.title =  `❤️ ${this.props.year}`;
    }
    

    handleClick = e => {
        const {handleYearClick, currentYear} = this.props;
        const year = e.target.text;
        document.title =  `❤️ ${year}`;
        if (currentYear === year) {
            return;
        }
        handleYearClick({
            value: 0,
            year
        });
    }

    generateYearList = length => {
        return Array.from({ length: length }, (v, i) => `${i + 2018}`);
    }

    render() {
        const {year} = this.props;
        
        const currentYear = new Date().getFullYear();
        const i = currentYear - 2017;
        const list = this.generateYearList(i);
        return (
            <div className="column is-3 is-2-widescreen">
                <div className="menu">
                    <p className="menu-label"> Filter by year </p>
                    <ul className="menu-list">
                        {list.map((item, index) =>{
                            return  <li key={index}>
                            <Link className={(`year_filter ` + (year === item ? `is-active` : ``)).trim()} onClick={this.handleClick} to={`/blog/` + item}>{item}</Link>
                            </li>
                        }) }
                    </ul>
                </div>
            </div>
        );
    }
}
