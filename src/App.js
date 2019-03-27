import React, { Component } from 'react';
import Result from './Result';
import { BrowserRouter, Route } from 'react-router-dom';
import Screen from './screen2';
import './App.css';

class App extends Component {


  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <div>
      <Route exact path="/" component={Result} />
      <Route exact path="/screen2/:id" component={Screen} />
      </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
