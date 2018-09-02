import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Main from './Main';
import Money from './Money';
import Company from './Company';
import Clarif from './Clarif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/signup" exact component={Signup}/>    
          <Route path="/main" exact component={Main}/>
          <Route path="/invest" exact component={Money}/>
          <Route path="/rankings" exact component={Company}/>   
          <Route path="/clarif" exact component={Clarif}/>          
        </Switch>
      </div>
    );
  }
}

export default App;
