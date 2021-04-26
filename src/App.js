import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
//note item import that simplifies action code 
import { addItem } from  './actions/items';

class App extends Component {

  //dispatchess actions to store
  //because we are reliant on store we need Redux 
  //addItem becomes a prop 
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

//makes ststa eavailable 
//redux state is store that returns an object with key/value pairs to store data 
// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// Code change: this new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!
// Notice above in handleOnClick() that this function, addItem(),
// is what is called, NOT the addItem action creator itself.
// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   };
// };

//use connect to access Redux store 
//add mapDispatchToProps
//by adding addItem we no longer need mapDispatchToProps function 
export default connect(state => ({ items: state.items }),
//note that we can remove mapStateToProps with the above line of code 
// mapStateToProps, 
{ addItem })(App);

//Note: if you decide to take out addItem don't forget to add this.props.dispatch({ type: 'INCREASE_COUNT' }) to your lick event 
