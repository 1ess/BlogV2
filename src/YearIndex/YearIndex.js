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

    render() {
        const {year} = this.props;
        return (
            <div className="column is-3 is-2-widescreen">
                <div className="menu">
                    <p className="menu-label"> Filter by year </p>
                    <ul className="menu-list">
                        <li>
                            <Link className={`year_filter ` + (year === `2018` ? `is-active` : ``).trim()} onClick={this.handleClick} to={`/blog/2018`}>2018</Link>
                        </li>
                        <li>
                            <Link className={`year_filter ` + (year === `2019` ? `is-active` : ``).trim()} onClick={this.handleClick} to={`/blog/2019`}>2019</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
