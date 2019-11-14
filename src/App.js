import React from "react";
import { connect } from "react-redux";
import { addItem } from	 "./actions/items";
import "./App.css";

class App extends React.Component {

	handleOnClick = () => this.props.addItem()

	render() {
		return (
			<div className="App">
				<button onClick={this.handleOnClick}>
					Click
				</button>
				<p>{this.props.items.length}</p>
			</div>
		)
	}

}

export default connect((state) => ({items: state.items}), {addItem})(App)
