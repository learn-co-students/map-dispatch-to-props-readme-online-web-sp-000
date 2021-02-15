import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem()
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

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => { dispatch(addItem()) }
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
