import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = (event) => {
    this.props.addItem();
  }
  // when you click, it calls this function
  // since we coupled the dispatch with it, the function is dispatch(addItem())

  render() {
    debugger
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
