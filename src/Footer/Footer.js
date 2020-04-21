import React, { Component } from 'react';

import '../Blog.css';

export default class Footer extends Component {
	render() {
		return (
			<footer className="has-background">
				<section className="hero is-medium">
					<div className="special-body">
						<div className="container">
							<div className="columns">
								<div className="column">
									<div className="content">
										<div className="columns is-vcentered">
											<div className="column is-7">											
												<p className="beian">粤ICP备19130368号-1</p>												
												<p className="beian"><span className ="emoji" role ="img" aria-label="heart">❤</span>️如果五分钟后她必须进安检，如果安检在十米之外，那意味着，你们可以亲吻四分五十秒。</p>
												<p className="beian">{`©2018-${new Date().getFullYear()} 清风. All rights reserved.`}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</footer>
		);
	}
}

