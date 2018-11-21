import React, { Component } from 'react'

export default class Login extends Component {

    handleClick = ()=>{
        const {handleLogin} = this.props;
        handleLogin();
    }

    render() {
        return (
            <div>Todo: verify</div>
        )
    }
}