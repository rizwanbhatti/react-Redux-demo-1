import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {connect}from'react-redux';


function mapStateToProps(state){
  console.log('hello')
  return{
    
demo:state
  }
}



class App extends Component {
  render() {
    return (
      <div>
         <h2>Welcome to React</h2>
   App{this.props.demo}
        </div>
          );
  }
}

export default connect(mapStateToProps)(App);
