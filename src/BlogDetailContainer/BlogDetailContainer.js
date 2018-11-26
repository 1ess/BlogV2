import React, { Component, Fragment } from 'react';

import marked from 'marked';
import hljs from 'highlight.js';

import 'highlight.js/styles/ocean.css';

const BlogContent = ({title, content}) => {
    var markdown = marked(content, {
        gfm: true,
        tables: true,
        breaks: true,
        highlight: function(code, lang) {
            const highlighted = hljs.highlight(lang, code).value;
            return `${highlighted}`;
          },
    });
    return (
        <Fragment>
            <h1 className={`title is-spaced`}>{title}</h1>
            <div className={`section-body`}>
                <div dangerouslySetInnerHTML={{ __html: markdown }}></div>
            </div>
        </Fragment>
    )
}

export default class BlogDetailContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transparent: true
        };
    }

    componentDidMount = () => {
        const self = this;
        setTimeout(function() {
            self.setState({
                transparent: false
            });
        }, 0);
    }

    render() {
        const {title, content} = this.props;
        const {transparent} = this.state;
        return (
            <div className={`content is-medium is-blog blog-alpha detail-alpha-zero`} style={{opacity: transparent ? 0 : 1}}>
                <BlogContent title={title} content={content} />
            </div>
        );
    }
}