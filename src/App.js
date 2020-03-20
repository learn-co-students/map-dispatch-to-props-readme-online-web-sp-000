import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from  './actions/items';

// class App extends Component {
//
//     handleOnClick() {
//         this.props.store.dispatch(addItem());   /* 1. this line of code makes the component reliant on Redux */
//     }
//
//     render() {
//         return (
//         <div className="App">
//             <button onClick={(event) => this.handleOnClick(event)}>Click</button>
//             <p>{this.props.items.length}</p>
//         </div>
//         );
//     }
//
// };
//
// const mapStateToProps = (state) => {
//     return {
//         items: state.items
//     };
// };
//
// export default connect(mapStateToProps)(App);

// NOTE:
// mapStateToProps() is making state.items available to App as: this.props.items
// the button in render() calls handleOnClick() when clicked.
// the handleOnClick() dispatches an action to the store.

/* 1.
fix this problem with the connect() function.

just like you can write `connect(mapStateToProps)(App)` to add new props to your App component,
you can pass connect() a second argument, and add your action creator as props.

then you can reference this action creator as a prop to call it from your component.
*/

class App extends Component {

    handleOnClick = event => {
        this.props.addItem()    /* code change: this.props.dispatch.store is no longer being called */
    }

    render() {
        // debugger
        return (
        <div className="App">
            <button onClick={this.handleOnClick}>Click</button>
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

// NOTE:
// the mapDispatchToProps() function takes in dispatch as an argument
// it then returns an object that contains a function as a value!

// Notice above in handleOnClick() that addItem is what is called,
// NOT the addItem action creator itself.

const mapDispatchToProps = dispatch => {
    return {
        addItem: () => {
            dispatch(addItem())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
The second argument of connect will accept a function OR an object.

If passed a function -  mapDispatchToProps() -  you must incorporate dispatch
as with the previous example.

if you pass in an object, the object needs to contain key/value pairs
for each action creator that you want to become props.
*/

/* ************* you could also DRY your code by implementing: ************** */

// class App extends Component {
//
//     handleOnClick = event => {
//         this.props.addItem()
//     }
//
//     render() {
//     debugger
//         return (
//         <div className="App">
//             <button onClick={this.handleOnClick}>Click</button>
//             <p>{this.props.items.length}</p>
//         </div>
//         );
//     }
// };
//
// const mapStateToProps = (state) => {
//     return {
//         items: state.items
//     };
// };
//
// export default connect(mapStateToProps, { addItem })(App);  // no mapDispatchToProps function required!

/* ****************************** OR **************************************** */

// class App extends Component {
//
//     handleOnClick = event => {
//         this.props.addItem()
//     }
//
//     render() {
//         debugger
//         return (
//         <div className="App">
//             <button onClick={this.handleOnClick}>Click</button>
//             <p>{this.props.items.length}</p>
//         </div>
//         );
//     }
// };
//
// export default connect(state => ({ items: state.items }), { addItem })(App);
// no mapStateToProps()  or mapDispatchToProps() functions required!
