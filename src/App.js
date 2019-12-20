import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    this.props.addItem();
  }

  render() {
    // debugger
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

// written inline as anonymous function as first argument to connect
// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// written inline in second argument to connect as as object with a key and value with same name, in ES6 shorthand syntax
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => { dispatch(addItem()) }
//   }
// }



export default connect(state => ({ items: state.items }), { addItem })(App);
