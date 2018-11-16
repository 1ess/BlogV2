import React, { Component } from 'react';
import NavLinkItem from '../NavLinkItem/NavLinkItem'

export default class NavLinks extends Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                {
                    link: `/`,
                    title: `Home`
                },
                {
                    link: `/blog/2018`,
                    title: `Blog`
                }
            ]
        }
    }

    render() {
        const { links } = this.state;
        const { selectedIndex } = this.props;
        return (
            links.map((link, index)=> (<NavLinkItem key={index} currentIndex={index} selectedIndex={selectedIndex} link={link.link} title={link.title} />))
        );
    }
}