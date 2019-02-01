import React, { Component } from 'react';

import './App.css';
import Headers from './Component/Header/Header'
import Body from './Component/Body/Body'
import Footer from './Component/Footer/Footer'


class App extends Component {
  render() {
    console.log('test')
    return (
      <div className="App" style={{display:'grid',gridTemplateRows:'48px 600px 48px'}}>       
        <Headers />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
