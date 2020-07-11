import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from './actions/items';

class App extends Component {
    handleOnClick() {
        //dispatches an action to the store - removed store.dispatch so the component no longer relies on Redux
        this.props.addItem();
    }

    render() {
        //<button> calls handleOnClick() when clicked ~ dispatches an action to the store

        /* debugger */
        return( 
            <div className="App">
                <button onClick={(event) => this.handleOnClick(event)}>Click</button>
                <p>{this.props.items.length}</p>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    //Makes state.items available to App as this.props.items
    return {
        items: state.items
    };
};

const mapDispatchToProps = dispatch => {
    //new function takes in dispatch as an argument and then returns an object that contains a function as its value ~ in handleOnClick this function addItem() is what is called, not the addItem action creator itself
    return {
        addItem: () => {
            dispatch(addItem())
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);