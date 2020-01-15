import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
 
class App extends Component {
 
  handleOnClick = event => {
    this.props.dispatch({ type: 'INCREASE_COUNT' })
  }
 
  render() {
    debugger
    return (
      <div className="App">
        <button onClick={this.handleOnClick}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};
 
export default connect(state => ({ items: state.items }))(App);