import React, { Component } from 'react';
import { Icon, Input, Button } from 'antd';
import {Link} from 'react-router-dom';
import hack from './hack.png';
import './Signup.css';

const { TextArea } = Input;

class Signup extends Component {        
    render() { 
        return ( 
            <div className="Pitch">
                <div className="Logo1">
                    <img src={hack} alt="Could not display"/>
                </div>
                <div className="Form1">
                    <div className="text1">
                        <h2 style={{ color: "#2f3542" }}>Pitch your Idea</h2>
                    </div>
                    <div className="Input-user1">
                        <Input placeholder="Enter Username" prefix={<Icon type="user"/>} name="username" type="username"/>
                    </div>
                    <div className="Input-pass1">
                        <Input placeholder="Enter Password" prefix={<Icon type="lock"/>} name="password" type="Password"/>
                    </div>
                    <div className="Input-pass1">
                        <Input placeholder="Enter E-mail" prefix={<Icon type="mail"/>} name="email" type="mail"/>
                    </div>
                    <div className="Input-pass1">
                        <Input placeholder="Enter Address of Business" prefix={<Icon type="compass"/>} name="location" type="location"/>
                    </div>
                    <div className="Input-pass1">
                        <Input placeholder="Enter the size of the team" prefix={<Icon type="plus-circle-o"/>} name="size" type="number" min={0}/>
                    </div>
                    <div className="Input-pass1">
                        <Input placeholder="Enter product Name" prefix={<Icon type="api"/>} name="product" type="username"/>
                    </div>
                    <div className="Input-pass1">
                        <Input placeholder="Enter Company Website" prefix={<Icon type="code"/>} name="website" type="url"/>
                    </div>
                    <div className="Input-pass1">
                        <Input placeholder="Amount of money needed" prefix={<Icon type="pay-circle"/>} name="money" type="money"/>
                    </div>
                    <div className="Input-pass1">
                        <TextArea placeholder="Enter some details about your product ... " rows={2.5}/>
                    </div>
                    <div className="Btn-login1">
                        <Link to='/'><Button type="primary">Sign-Up<Icon type="login"/></Button><br/><br/></Link>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Signup;