import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

class App extends Component {

//referencing our store here makes handleOnClick reliant upon redux which we don't want (because it's not as easy to use elsewhere and/or doesn't separate our concerns--making our project harder to debug)

//if we remove the mapStateToProps func, then we have to add this.props.store.dispatch() to invoke addItem(). Otherwise it'll say that addItem is not a func (or whatever func you are referring to in the handleOnClick)
  handleOnClick = (event) => {
    this.props.store.dispatch(addItem());
  }

//clicking on the button below uses store to dispatch our addItem() action, imported from the actions folder

//after we set up mapDispatchToProps, we place a debugger below and type this.props.addItem in our console. We'll see addItem is a function which includes a dispatch func within it. The handleOnClick method within the btn
  render() {
    // debugger
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

//technically, this method is no longer needed since I passed items/state directly into my connect func in the export.
// const mapStateToProps = (state) => {
//   return {
//     items: state.items
//   };
// };

//READ THIS WHOLE SECTION AND ONES BELOW TO UNDERSTAND THE EVOLUTION OF THE SIMPLIFICATION OF CODE
//passes dispatch to addItem, which passes an anon arrow that returns the result of the addItem reducer.
//a shorter way is to just pass { addItem } in as the 2nd arg in connect (shown in export below)
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: () => {
//       dispatch(addItem())
//     }
//   }
// }

//READ THIS WHOLE SECTION AND ONES ABOVE TO UNDERSTAND THE EVOLUTION OF THE SIMPLIFICATION OF CODE
//pass mapDispatchToProps as a 2nd arg so that we have access to dispatch and the actions it creates via props
//a shorter way is to just pass the reducer as an obj directly into connect() as the 2nd arg and import it to file. That code will allow us to remove entirely our mapDispatchToProps func above.
// export default connect(mapStateToProps, { addItem })(App);
/* ES6 shorthand lets us pass in *one* value that will be read as the key and value */

//We can simplify even further by dropping mapStateToProps. Since connect always takes state as its first arg, we can change the export directly above this to do this:
// export default connect(state => ({items: state.items}), { addItem })(App)

//additionally, since dispatch is automatically incl in connect when no 2nd arg is specified, we can change the export directly above to just this:
export default connect(state => ({items: state.items}))(App)

//With the above said, if i would rather write this.props.dispatch({type: 'INCREASE_COUNT'}) in App, or pass dispatch down to children than that is also fine. Basically anything goes -- chaos, apocalypse!
