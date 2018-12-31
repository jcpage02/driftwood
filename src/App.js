import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='Header'>
          <branding className='Branding'>
            <logo>DW</logo>
            <h4>Driftwood</h4>
          </branding>
          <nav className='TopNav'>
            <h4>Men's</h4>
            <h4>Women's</h4>
            <h4>Kid's</h4>
            <icon>Cart</icon>
          </nav>
        </header>
        <image className='Welcome'>Welcome Photo</image>
        <nav className='SideNav'></nav>
        <products className='Products'>Products</products>
      </div>
    );
  }
}

export default App;
