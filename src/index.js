import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import Blog from './Blog/Blog';
import BlogPage from './BlogPage/BlogPage';
import BlogArchive from './BlogArchive/BlogArchive';
import ErrorPage from './Error/Error';

import './index.css';

ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/blog/:year(2018|2019)" component={Blog} />
            <Route exact path="/blog/:year(2018|2019)/:tag" component={BlogPage} />
            <Route exact path="/blog/archive" component={BlogArchive} />
            <Route exact path="/blog/archive/:year(2018|2019)/:tag" component={BlogPage} />
            <Route component={ErrorPage} />
        </Switch>
    </Router>
), document.getElementById('root'));

document.addEventListener('visibilitychange', function() {
    const isHidden = document.hidden;
    const originTitile = document.title;
    const title = originTitile.substring(2).trim();
    document.title = (isHidden ?  "💔 " :  "❤️ ") + title
});

function getMultiLine(lines) {
    lines = lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
    return lines;
}

var slogan = 
`/*
谁终将声震人间, 必长久深自缄默。

谁终将点燃闪电, 必长久如云飘泊。
*/`
var style = [
    'color: #a0a0a0',
    'font-size: 18px',
].join(';');
window.console.log('%c%s', style, getMultiLine(slogan));
