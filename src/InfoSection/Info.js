import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import messageImg from '../message-img.jpg';

const Introduction = ({className = '', introduction}) => (
    <span className={(`shadow ${className}`).trim()}>{introduction}</span>
)

const Summary = ({blog_link}) => (
    <div className="column is-half">
        <div className="content hello">
            <p>Hey I'm GodzzZZZ.</p>
            <p>I'm a
                <Introduction className={`is-danger`} introduction={` Frontend developer `} />,
                <Introduction className={`is-turquoise`} introduction={` iOS developer `} />,
                <Introduction className={`is-warning`} introduction={` Blogger `} />,
                <Introduction className={`is-success`} introduction={` Open source activist `} />.
            </p>
            <p>
                Find me on
                <a href="https://www.zhihu.com/people/19921213/answers"> Zhihu</a>
                ,
                <a href="https://github.com/GodzzZZZ"> GitHub </a>
                or
                <Link to={blog_link}> Blog</Link>.
            </p>
        </div>
    </div>
)

const Picture = () => (
    <div className="column is-5 is-offset-1">
        <div id="messages" className="messages">
            <div className="message is-shown">
                <img className="message-img" src={messageImg} alt={``}/>
            </div>
        </div>
    </div>
)

export default class Info extends Component {
    render() {
        const { blog_link } = this.props;
        return (
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <Summary blog_link={blog_link} />
                            <Picture />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
  }