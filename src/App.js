import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {


  // handleOnClick() {
  //   this.props.store.dispatch(addItem());
  // }
  //changed to: 
  handleOnClick = event => {
    this.props.addItem()
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

const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addItem())
    }
  };
};
 
//export default connect(mapStateToProps, mapDispatchToProps)(App);
//changed to:
export default connect(mapStateToProps, { addItem })(App);


//or alternatively: write all of above, line 40 to 50 as:
//export default connect(state => ({ items: state.items }), { addItem })(App);
