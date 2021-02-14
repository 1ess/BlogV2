import React, { Component } from 'react';
import '../config.js';

const Introduction = ({className = '', introduction}) => (
    <span className={(`shadow ${className}`).trim()}>{introduction}</span>
)

const Summary = ({blog_link}) => (
    <div className="column is-6">
        <div className="content hello">
            <h2>Hello.</h2>
            <h4>My name is Stephen Chang.</h4>
            <p>I'm a
                <Introduction introduction={` `} />
                <Introduction className={`is-danger`} introduction={`developer`} />、
                <Introduction className={`is-danger`} introduction={`blogger`} />、
                <Introduction className={`is-danger`} introduction={`vimer`} /> and 
                <Introduction introduction={` `} />
                <Introduction className={`is-danger`} introduction={`open source activist`} />.
            </p>
            <p>
                If you happen to speak Chinese, you can also find me on 
                <a className={`zhihu-link shadow is-danger`} href="https://www.zhihu.com/people/19921213/answers"> 知乎</a> or <a className={`weibo-link shadow is-danger`} href="https://weibo.com/zdd19921213">微博</a> for more up-to-date content.
            </p>
            <p>
                Outside of programming, I enjoy staying with my wife and going on a road trip.
            </p>
        </div>
    </div>
)

const Picture = () => (
    <div className="column is-5 is-offset-1">
        <div id="messages" className="messages">
            <div className="message is-shown">
                {/* <img className="message-img" src={`${global.constants.image_host}/h4cker/bg.svg`} alt={``} /> */}
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