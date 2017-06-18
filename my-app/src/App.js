import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>ReactJS is Awesome!!!</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>


              React allows to create the Virtual DOM objects
            </h2>

         </div>
      );
   }
}
class App extends Component {
  render() {
    return (

      <div className="App">
        <div>
                   <Header/>
                   <Content/>
                </div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GOD IS GREAT !!!</h2>
        </div>

      </div>
    );
  }
}

export default App;
