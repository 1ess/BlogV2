import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import messageImg from '../message-img.jpg';

const Introduction = ({className = '', introduction}) => (
    <span className={(`shadow ${className}`).trim()}>{introduction}</span>
)

const Summary = ({blog_link}) => (
    <div className="column is-half">
        <div className="content hello">
            <h2>Hello.</h2>
            <h3>My name is Stephen Chang.</h3>
            <p>I'm a
                <Introduction className={`is-danger`} introduction={` Programmer `} />、
                <Introduction className={`is-warning`} introduction={` Blogger `} /> and
                <Introduction className={`is-success`} introduction={` Open Source Activist `} />.
            </p>
            <p>
                you can follow me on Twitter for more up-to-date content.
            </p>
            <p>
                If you happen to speak Chinese, my Chinese name is 张冬冬. you can also find me on 知乎.
            </p>
            <p>
                Outside of programming, I enjoy video games and going on a road trip.
            </p>
            <p>
                Find me on
                <a className={`follow`} href="https://www.zhihu.com/people/19921213/answers"> Zhihu</a>
                ,
                <a className={`follow`} href="https://github.com/GodzzZZZ"> GitHub </a>
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
                <img className="message-img" src={messageImg} alt={``} />
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