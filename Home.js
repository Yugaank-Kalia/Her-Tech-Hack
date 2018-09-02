import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Player } from 'video-react';
import {Button,Icon} from 'antd';
import NavBar from './Navbar';
import hack from './hack.png';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { login : false };
    }
    render() { 
        return (
            <div className="Homepage">
                <NavBar/>
                <div className="head">
                    <h1>
                    <div style={{ 
                        height: 0,
                        marginRight: "75px"
                    }}> WCube</div>
                    <div className="hack">
                        <img src={hack}/>
                    </div>
                    <br/>Her-Tech Hackathon</h1>
                </div>
                <h2 style={{ paddingRight: "50px" }} >Where AI meets Blockchain</h2>
                <div className="Button">
                    <Link to="/rankings"><Button type="primary">Contribute<Icon type="login"/></Button></Link>
                    <Link to="/signup"><Button type="danger" style={{ marginLeft: "-500px" }}>Participate<Icon type="login"/></Button></Link>
                </div>
            </div>
         )
    }
}
export default Home;