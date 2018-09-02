import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Button,Icon } from 'antd';
import './Navbar.css';

class NavBar extends Component {
    render() { 
        return ( 
        <div>     
            {/* <div className="btn">
                <Link to="/signup"><Button type="danger">Sign-Up<Icon type="user-add"/></Button></Link>
            </div> */}
            <div className="btn">
                <Link to="/login"><Button className="btn-text" type="danger">Login<Icon type="lock"/></Button></Link>
            </div>
        </div>
        );
    }
}
 
export default NavBar;