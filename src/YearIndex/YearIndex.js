import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import '../Blog.css';

export default class YearIndex extends Component {


    componentDidMount = () => {
        document.title =  `❤️ ${this.props.index}`;
    }
    

    handleClick = e => {
        this.setState({
            index: e.target.text
        });
        document.title =  `❤️ ${e.target.text}`;
    }

    render() {
        const {index} = this.props;
        return (
            <div className="column is-3 is-2-widescreen">
                <div className="menu">
                    <p className="menu-label"> Filter by year </p>
                    <ul className="menu-list">
                        <li>
                            <Link className={`year_filter ` + (index === `2018` ? `is-active` : ``)} onClick={this.handleClick} to={`/blog/2018`}>2018</Link>
                        </li>
                        <li>
                            <Link className={`year_filter ` + (index === `2019` ? `is-active` : ``)} onClick={this.handleClick} to={`/blog/2019`}>2019</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
  }
