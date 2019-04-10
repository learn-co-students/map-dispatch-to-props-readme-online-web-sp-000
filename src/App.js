import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addItem } from './actions/items';

class App extends Component {

  handleOnClick = event => {
    this.props.addItem();
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
  };
};

export default connect(mapStateToProps, { addItem })(App);

//we could also get rid of mapStateToProps() as well, and handle it all in one line:

// export default connect(state => ({ items: state.items }), { addItem })(App);