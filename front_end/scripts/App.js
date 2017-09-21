import React, { Component } from 'react';

import CardsContainer from "./CardsContainer"


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			result: ''
		}
	}
	componentDidMount() {
		// fetch polyfill
		// this.serverRequest = $.get('http://localhost:3000/cards', function(result){		
		// 	this.setState({
		// 		result: result
		// 	})
		// }.bind(this))
		this.serverRequest = fetch('http://localhost:3000/cards')
														.then(function(response){
															return response.json()
														}).then(function(json){
															this.setState({
																result: json
															})
														}.bind(this))
	}
  render() {
  	console.log('result',this.state.resut);
  	if (this.state.result == '')
  	{
  		return (
  				<div>Loading</div>
  			)
  	}else {

    return (
      <CardsContainer cards={this.state.result} />
    );
  	}
  }
}

export default App