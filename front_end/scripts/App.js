import React, { Component } from 'react';

import CardsContainer from "./CardsContainer"


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			result: '[{"id":31,"front_text":"Front Text","back_text":"Back Text","back_type":"Text"}]'
		}
	}
	componentDidMount() {
		// fetch polyfill
		this.serverRequest = $.get('http://localhost:3000/cards', function(result){		
			this.setState({
				result: result
			})
		}.bind(this))
	}
  render() {
    return (
      <CardsContainer cards={this.state.result} />
    );
  }
}

export default App