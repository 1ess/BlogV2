import React, { Component } from 'react';
import BlogItem from '../BlogItem/BlogItem';
import '../App.css';
import '../Blog.css';

export default class Blog2019 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    "title": `测试`,
                    "date_time": `Jun 13`,
                    "summary": `那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。`
                }
            ]
        }
    }
    render() {
        const {items} = this.state;
        return (
            <div className="columns is-multiline shuffle" id="grid">
                {
                    items.map((item, index)=>(<BlogItem key={index} number={``+ (index + 1)} title={item.title} date_time={item.date_time} summary={item.summary} />))
                }
            </div>
        );
    }
}

