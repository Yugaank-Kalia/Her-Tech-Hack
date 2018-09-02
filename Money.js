import React, { Component } from 'react';
import { Button } from 'antd';
import './Money.css';

class Money extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: "#ff6b81",
            money: 0,
            max: 250000
         }
    }

    handleClick = () => {
        this.setState({
            money: this.state.money+10000
        })
        
        if(this.state.money >= (0.5 * this.state.max) && this.state.money < (0.9 * this.state.max)){
            this.setState({
                active: "#eccc68",
            })}
            else if(this.state.money >= (0.9 * this.state.max) && this.state.money < (this.state.max) ){
                this.setState({
                    active: "#16a085"
            })}
            else if(this.state.money >= (this.state.max)){
                this.setState({
                    active: "#55E6C1"
            })
        }
    }

    render() {
        return ( 
            <div>
                <div className="Monz">
                    <h1>Our Investor's Pool</h1>
                </div>
                <div style={{ background: this.state.active }} className="Circle">
                    <h1>${this.state.money} / ${this.state.max}</h1>
                    <div className="button">
                        <Button className="Donate" onClick={this.handleClick} type="primary">$1000</Button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Money;