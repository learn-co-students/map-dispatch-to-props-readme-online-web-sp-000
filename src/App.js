import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem()
  }

  render() {
    return (
      <div className="App">
        {/* onClick --> dispatches an action to the store */}
        <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    addItem: () => {
    dispatch(addItem()) // ==> available to App as this.props.items
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
