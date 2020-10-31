import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

// function to handleClick() {this.props.store.dispatch(addItem());} dispatches an action to the store
// problem: component is no longer indifferent about its state management system
// and makes the component reliant on redux
// to solve this problem, use connect() function
  handleOnClick() {
    this.props.addItem();
  }

  render() {
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

// function inmplemented to make state.items available to App as this.props.items
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {dispatch(addItem())}
//   }
// }

// first arg in connect() is a function to accept the redux store's state as an argument and return an object created with that info
// function passed in for second argument passes in the dispatch function
// export default connect(mapStateToProps, mapDispatchToProps)(App);


export default connect(mapStateToProps, { addItem })(App);
