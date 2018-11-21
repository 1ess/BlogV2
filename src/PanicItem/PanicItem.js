import React, { Component } from 'react';

export default class PanicItem extends Component {

    constructor(props) {
        super(props);
        const { id, tag, title, date, summary, year } = this.props;
        this.state = {
            contentEditable: false,
            tag,
            title,
            date,
            summary,
            year,
            id 
        };
        
        this.tagRef = React.createRef();
        this.titleRef = React.createRef();
        this.yearRef = React.createRef();
        this.dateRef = React.createRef();
        this.summaryRef = React.createRef();
    }

    handleClick = () => {
        const { handleItemClick } = this.props;
        this.setState((prevState) => ({
            contentEditable: !prevState.contentEditable
        }));
        if (this.state.contentEditable) {
            handleItemClick({
                id: this.props.id,
                tag: this.tagRef.current.innerText,
                title: this.titleRef.current.innerText,
                date: this.dateRef.current.innerText,
                year: this.yearRef.current.innerText,
                summary: this.summaryRef.current.innerText
            });
        }
    }

    render() {
        const { tag, title, date, summary, year } = this.state;
        const { contentEditable } = this.state;
        return (
            <li className={`item panic-item`} style={contentEditable?{background: `#f3f3f1`}:{}} >
                <span className={`sharp-num`} onClick={this.handleClick}>#</span>
                <span className={`sharp-num`} suppressContentEditableWarning name={`tag`}  contentEditable={contentEditable} ref={this.tagRef}>{tag}</span>
                <span className={`sharp-num`}> - </span>
                <span className={`title is-4 has-text-weight-normal panic-title`} suppressContentEditableWarning  contentEditable={contentEditable} ref={this.titleRef}>{title} </span>
                <h4>
                    <span className={`subtitle panic-subtitle`} suppressContentEditableWarning  contentEditable={contentEditable} ref={this.yearRef}>{year} </span>
                    <span className={`subtitle panic-subtitle`} suppressContentEditableWarning  contentEditable={contentEditable} ref={this.dateRef}>{date}</span>
                </h4>
                <p suppressContentEditableWarning  contentEditable={contentEditable} ref={this.summaryRef}>{summary}</p>
            </li>
        );
    }
}