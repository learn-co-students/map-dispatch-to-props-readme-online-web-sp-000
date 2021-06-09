import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem();
  }

  render() {
    debugger;
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

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// or passin an object with the same key and value name, like {addItem: addItem}, shortened to {addItem} ES6
// No mapDispathcToProps required if using the below syntax:
// export default connect(mapStateToProps, {addItem})(App);
