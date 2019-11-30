import React, { Component } from 'react';

import Header from '../Header/Header';

import '../App.css';

const BaseInfo = () => (
    <div className="column is-half">
        <h2 className={`title-padding-bottom`}>About</h2>
        <p className={`is-title`}>一个"爱做梦的"</p>
        <p className={`base-info is-gray`}>利用自己的技术，让生活更加美好</p>

        <p className={`is-title`}>一个"敲代码的"</p>
        <p className={`base-info is-gray`}>Objective-C & C# & JavaScript & Python</p>

        <p className={`is-title`}>一个"搞设计的"</p>
        <p className={`base-info is-gray`}>将灵感变为现实</p>

        <p className={`is-title`}>一个"写废话的"</p>
        <p className={`base-info is-gray`}>再回首，恍然如梦</p>

        <p className={`is-title`}>我叫张冬冬，一个生于 92 年的程序猿</p>
    </div>
)

const Skills = () => (
    <div className="column is-half">
        <h2 className={`title-padding-bottom`}>Skill</h2>
        <p className={`is-title`}>编程语言</p>
        <p className={`base-info is-gray`}>Objective-C & C# & JavaScript (ES6) & Python</p>

        <p className={`is-title`}>开发工具</p>
        <p className={`base-info is-gray`}>XCode & Visual Studio & Visual Studio Code & PyCharm</p>

        <p className={`is-title`}>前端框架</p>
        <p className={`base-info is-gray`}>React & React-router & Bootstrap & Bulma</p>

        <p className={`is-title`}>后端框架</p>
        <p className={`base-info is-gray`}>ASP.Net (Core)</p>

        <p className={`is-title`}>正在不断寻找任何有趣的技术 ing</p>
        
    </div>
)

export default class About extends Component {

	componentDidMount() {
		document.title = " ❤️ About Me";
		this.node.scrollIntoView();
	}

	render() {
		return (
		<div ref={node => this.node = node} className="app-container">
			<Header symbol={`❤️`} selectedIndex={3} />
			<main className="app-content has-background">
                <section className="hero is-medium">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns is-vcentered">
                                <BaseInfo />
                                <Skills />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
		</div>
		);
	}
}