import React, { Component } from 'react';
import { Button,Icon } from 'antd';
import {Link} from 'react-router-dom';
import hack from './hack.png';
import './Main.css';

class Main extends Component {
    render() { 
        return ( 
            <div className="Main">
                <div className="Logo">
                    <img src={hack} alt="Could not display"/>
                </div>
                <div className="Form">
                    <div className="txt">
                        Feel like giving back?
                    </div>
                    <div className="Btn-login" style={{ paddingBottom: "20px" }}>
                        <Link to='/invest'><Button type="primary">Donate</Button></Link>
                    </div>
                    <div className="Btn-login">
                    <Link to='/invest'><Button type="danger">Invest</Button></Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Main;