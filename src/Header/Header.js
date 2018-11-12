import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import burger from '../ev'
import '../App.css';
import icon from '../icon.jpg'

const NavLink = ({ home_link, blog_link, index }) => (
    <div className="navbar-menu" id="mainNav">
        <div className="navbar-end">
            <Link className={(`navbar-item ` + (!index ? `is-active` : ``)).trim()} to={home_link}>Home</Link>
            <Link className={(`navbar-item ` + (index ? `is-active` : ``)).trim()} to={blog_link}>Blog</Link>
            <a href="https://www.zhihu.com/people/19921213/answers" className="navbar-item">Zhihu</a>
            <a href="https://github.com/GodzzZZZ" className="navbar-item">GitHub</a>
        </div>
    </div>
)

const NavBrand = ({icon, symbol})=> (
    <div className="navbar-brand">
        <div className="brand">
            <div className="navbar-item">
                <div className="brand-icon">
                    <img className="present-icon" role="presentation" src={icon} alt="icon" />
                </div>
                <span className ="emoji" role ="img" aria-label="heart">{symbol}</span> A Sort Of A Blog
            </div>
        </div>
        <div className="navbar-burger burger" data-target="mainNav">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
)

export default class Header extends Component {

    componentDidMount() {
        burger();
    }

    render() {
      const { symbol, home_link, blog_link, index } = this.props;

      return (
        <header className="app-header">
          <nav className="navbar is-fixed-top is-small">
                <div className="container">
                    <NavBrand icon={icon} symbol={symbol} />
                    <NavLink index={index} home_link={home_link} blog_link={blog_link} />
                </div>
            </nav>
        </header>
      );
    }
  }
