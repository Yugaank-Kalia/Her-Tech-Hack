import React, { Component } from 'react';
import { Button, Icon,  } from 'antd';
import './Company.css';
class Clarif extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            money: 0
         }
    }

    handleClick = () => {
        this.setState({ money: 300 });
    }

    render() { 
        return ( 
            <div>
                <div className="container">
                <div className="card">1. <b>Flutter</b>: Flutter is Google’s mobile app SDK for crafting high-quality native interfaces on iOS and Android in record time. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.<br/><a href="https://flutter.io">Go to the website</a></div>
                <div className="btn">
                <Button onClick={this.handleClick} type="primary">Withdraw<Icon type="login"/></Button>
                </div>
                </div>
                <div className="con">
                <div id="card">
                <h3>Amount Withdrawn : ${this.state.money}</h3>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Clarif;