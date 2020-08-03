import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  handleOnClick () {
    this.props.addItem() // Code change: this.props.store.dispatch is no longer being called
  }

  render () {
    return (
      <div className='App'>
        <button onClick={event => this.handleOnClick(event)}>Click</button>
        <p>{this.props.items.length}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps, { addItem })(App) // Code change: no mapDispatchToProps function required!
