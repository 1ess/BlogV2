import React, { Component } from 'react';

import scan from '../scan-qrcode.png';
import wechat from '../wechat.jpg';

export default class Info extends Component {
    render() {
      return (
        <section className="hero is-medium">
                <div className="special-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h2 className="title is-4">
                                    <span className="shadow is-danger"><strong>Connect</strong> with WeChat</span>
                                </h2>
                                <div className="content">
                                    <div className="columns is-vcentered">
                                        <div className="column is-7">
                                            <p>
                                                If you have any
                                            </p>
                                            <p>
                                                <strong className="shadow is-success question">
                                                    questions
                                                </strong>
                                            </p>
                                            <p>
                                                or
                                            </p>
                                            <p>
                                                <strong className="shadow is-turquoise question">
                                                    opinions.
                                                </strong>
                                            </p>
                                            <p>
                                                You can connect me with <span className="has-highlight">WeChat</span>:
                                            </p>
                                        </div>
                                        <div className="column is-size-3-desktop is-size-2 scan-qrcode">
                                            <div className="extract has-text-grey-light">Extract!</div>
                                            <img className="scan-qrcode bd-drawing" src={scan} alt="" />
                                        </div>
                                        <div className="wechat-container column is-size-2-desktop is-size-3 bd-rainbow shadowpower2">
                                            <img className="wechat-image" src={wechat} alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}