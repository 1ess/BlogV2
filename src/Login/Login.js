import React, { Component } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import girl from '../girl.png'
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this._isMounted = true;
        this.state = {
            isLoading: false,
            value: ``,
            symbol: `😜`
        }
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleClick = ()=>{
        const {handleLogin} = this.props;
        const {value} = this.state;
        const self = this;
        this.setState({
            isLoading: true
        });
        axios({
            method: 'post',
            url: 'https://api.godzzzzz.club/api/login',
            data: {
                kernel: value
            }
        }).then(function (response) {
            if(!response.data.code) {
                toast.success("🤗 Login Successful!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `success-toast`
                });
                handleLogin();
            }else {
                toast.error("😩 Login Failure!", {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    draggable: true,
                    className: `error-toast`
                });
            }
        }).catch(function (error) {
            toast.error("😪 Login Failure!", {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                draggable: true,
                className: `error-toast`
            });
        }).then(function () {
            if (self._isMounted) {
                self.setState({
                    isLoading: false
                });
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const { isLoading, symbol, value } = this.state;
        return (
            <div className={`hero`}>
                <div className={`hero-body`}></div>
                <div className={`hero-body`}>
                    <div className={`columns`}>
                        <div className={`column is-4 is-offset-4`}>
                            <div className={`field`}>
                                <div className={(`control`).trim()}>
                                    <input className={`input is-medium`} type="password" placeholder="Type Kernel" value={value}  onChange={this.handleChange}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`columns`}>
                        <div className={`column is-4 is-offset-4`}>
                            <div className={`field`}>
                                <div className={(`control`).trim()}>
                                    <button style={{width: `100%`}} onClick={this.handleClick} className={(`button is-warning ` + (isLoading ? `is-loading` : ``)).trim()} ><span className ="emoji" role ="img" aria-label="heart">{symbol} </span> Go.</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className={`section is-reviews`}>
                        <div className="section-media"> 
                            <img role="img" src={girl} alt="" /> 
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}