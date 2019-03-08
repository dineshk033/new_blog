import React, { Component } from 'react';

import './App.css';
import Navbar from './component/header/navbar';
import AsideLeft from './component/leftProfile';
import Posts from './component/Posts';
import Right from './component/rightProfile';

class App extends Component {
  render() {
    return (
    <div>
        <Navbar></Navbar>
        <div className="container">
          <div className="row">
            <div className="left col-md-3">
              <AsideLeft/>
            </div>
            <div className="col-md-6">
              <Posts/>
            </div>
            <div className="col-md-3">
              <Right/>
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
