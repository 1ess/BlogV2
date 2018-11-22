import React, { Component } from 'react';
import BlogList from '../BlogList/BlogList';
import YearIndex from '../YearIndex/YearIndex';

export default class BlogContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            alpha: 0
        };
    }

    handleYearClick = ({value, index}) => {
        const {handleYearChange} = this.props;
        handleYearChange(index)
        this.setState({
            alpha: value
        });
    }

    handleAlphaChange = (value) => {
        this.setState({
            alpha: value
        });
    }

    render() {
        const {index} = this.props;
        const {alpha} = this.state;
        return (
            <main className={`app-content`}>
                <section className={`section is-storyworlds has-background is-medium  special-container`}>
                        <div className={`container`}>
                            <div className={`columns`}>
                                <YearIndex index={index} currentIndex={index} handleYearClick={this.handleYearClick}/>
                                <BlogList index={index} alpha={alpha} handleAlphaChange={this.handleAlphaChange}/>
                            </div>
                        </div>
                </section>
            </main>
        );
    }
}

