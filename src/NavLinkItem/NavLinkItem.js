import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavLinkItem extends Component {
    render() {
        const { currentIndex, selectedIndex, link, title} = this.props;
        return (<Link className={(`navbar-item ` + (selectedIndex === currentIndex ? `is-active` : ``)).trim()} to={link}>{title}</Link>);
    }
}