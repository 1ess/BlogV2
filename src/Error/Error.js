
import React from 'react';
import { Link } from 'react-router-dom';

import '../Error.css';
import '../config.js';

export default class Error extends React.Component {
    componentDidMount() {
        document.title = "Oops! Page Not Found";
    }
	render(){
		return (
			<div className="Error_container">
                <p className="Error" id="Error_not-found"><strong>Oops!</strong> Something has gone wrong!
                    <br /> Try the <Link className="Error_btn" to='/blog/2018'>home page</Link>.
                </p>
                <div className="Error_caveman-gif">
                    <img src={`${global.constants.image_host}/h4cker/404.gif`} alt="" />
                </div>
            </div>
		)
	}
}
