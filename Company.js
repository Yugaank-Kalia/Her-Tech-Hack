import React, { Component } from 'react';
import { Button, Icon,  } from 'antd';
import {Link} from 'react-router-dom';
import './Company.css';

class Company extends Component {
  render() { 
    return ( 
      <div>
        <h2><br/>Top Companies</h2>
        <div className="container">
          <div className="card">1. <b>Flutter</b>: Flutter is Google’s mobile app SDK for crafting high-quality native interfaces on iOS and Android in record time. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.<br/><a href="https://flutter.io">Go to the website</a></div>
          <div className="btn">
            <Link to='/main'><Button type="primary">Contribute<Icon type="login"/></Button></Link>
          </div>
        </div>
        <div className="container">
          <div className="card">2. <b>Clarif.ai</b>: Clarif.ai is THE LEADING AI SOLUTION FOR REAL-WORLD BUSINESS PROBLEMS The problems that your business encounters don’t change very often. The way you can solve those problems just has, with Clarifai.<br/><a href="https://clarifai.com/">Go to the website</a></div>
          <div className="btn">
            <Link to='/main'><Button type="primary">Contribute<Icon type="login"/></Button></Link>
          </div>
        </div>
        <div className="container">
          <div className="card">3. <b>Octolab.ml </b>An automated machine learning platform. Intelligent data structuring, preprocessing, feature engineering, data modelling, and data visualization. Simplify your machine learning stack using octolab.ml<br/><a href="https://clarifai.com/">Go to the website</a></div>
          <div className="btn">
            <Link to='/main'><Button type="primary">Contribute<Icon type="login"/></Button></Link>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Company;