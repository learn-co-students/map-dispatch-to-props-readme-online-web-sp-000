import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';
 
class App extends Component {
 
  handleOnClick = event => {
    this.props.addItem() // Code change: this.props.dispatch.store is no longer being called
  }
 
  render() {
    
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
 

 
export default connect(state => ({items: state.items}), {addItem})(App);
