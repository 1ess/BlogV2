import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from '../Header/Header';


const BlogHeader = ({year, title}) => (
    <nav className={`breadcrumb is-medium`}> 
        <ul> 
            <li><Link to={`/blog/2018`}><i className={`icon icon-grid is-small`}></i><span>{`Blogs`}</span></Link> </li> 
            <li> <Link to={`/blog/${year}`}><span>{year}</span></Link> </li> 
            <li className={`is-active`}> <Link to={`#`}><span>{title}</span></Link> </li> 
        </ul>
    </nav>
);

export default class BlogPage extends Component {

    // constructor(props) {
    //     super(props);
    //     this
    // }



    render() {
        console.log(this.props.match.params.index);
        return (
            <div className={`app-container`}>
            
            <Header symbol={`❤️`} selectedIndex={1} />
            <main className="app-content has-background">
                <div className="container">
                    <BlogHeader year={`${this.props.match.params.index}`} title={`${this.props.match.params.tag}`}/>
                </div>
            </main>
            
            </div>
        );
    }
}