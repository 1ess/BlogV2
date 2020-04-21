import React, { Component } from 'react';

import '../App.css';

const ContributionItem = ({ symbol, slogan, project_name, project_link }) => (
    <div className="item columns">
        <div className="column is-3">
            <a className="item-title" href={project_link} target="_blank" rel="noopener noreferrer"> {project_name} </a>
        </div>
        <div className="column is-6 has-text-grey-light">
            <span role ="img" aria-label="">{symbol}</span> {slogan}
        </div>
        <div className="column is-3 github-button">
            <a className="button is-medium is-danger bd-rainbow shadowpower2" href={project_link}><span> more <strong>Detail</strong> 🤗</span></a>
        </div>
    </div>
)

export default class Contribution extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [
            {
                "symbol": `📝`,
                "slogan": `一个集成简单，交互效果不错的图片浏览器`,
                "project_name": `MFPictureBrowser`,
                "project_link": `https://github.com/1ess/MFPictureBrowser`
            },
            {
                "symbol": `🍰`,
                "slogan": `类似于 Cosmos 应用的 HUD 效果，轻量简便`,
                "project_name": `MFHUDManager`,
                "project_link": `https://github.com/1ess/MFHUDManager`
            },
            {
                "symbol": `🐨`,
                "slogan": `从图片中自动提取显著的颜色，柔和且高性能`,
                "project_name": `MFExtractColor`,
                "project_link": `https://github.com/1ess/MFExtractColor`
            },
            {
                "symbol": `❤️`,
                "slogan": `基于 AFNetworking 的网络库，自定义强大`,
                "project_name": `MFNetworkManager`,
                "project_link": `https://github.com/1ess/MFNetworkManager`
            }
        ]};
    }

    render() {
        const {items} = this.state;
        return (
            <section className="hero is-medium">
                <div className="special-body">
                    <div className="container">
                        <h2 className="title is-4">
                            <span className="shadow is-success">
                                <strong>Open source</strong> contributions</span>
                        </h2>
                        {
                            items.map((item, index) => (<ContributionItem key={index} symbol={item.symbol} slogan={item.slogan} project_name={item.project_name} project_link={item.project_link} />))
                        }
                    </div>
                </div>
            </section>
        );
    }
}