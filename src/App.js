import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

  handleOnClick() {
    //this.props.store.dispatch(addItem());
    this.props.addItem()

  }

  render() {
//debugger;
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

// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(App);


//The following line affords the elimination of the mapDispatchToProps function above:

//export default connect(mapStateToProps, {addItem})(App);

// Or we could get rid of mapStateToProps as well by writing:

//export default connect(state => ({ items: state.items }), { addItem })(App);

// And, actually, we can simply do the following line and still have this.props.dispatch() available in App:
//export default(connect)(state => ({ items: state.items }))(App);
export default connect(state => ({ items: state.items }))(App);
//export default (connect)(state => ({ items: state.items }))(App);
