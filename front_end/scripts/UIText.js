import React, { Component } from 'react';

var textStyle = {
	textDecoration: 'none',
	fontSize: '0.8rem',
	fontStyle: 'italic'
}

class UIText extends React.Component {
	constructor(props) {
		super(props);
		this.onMouseOver = this.onMouseOver.bind(this)
		this.onMouseOut = this.onMouseOut.bind(this)
		this.state = {
			hover: false
		}
	}

	onMouseOver() {
		console.log('Hover')
		this.setState({
			hover: true
		})
	}

	onMouseOut(){
		this.setState({
			hover: false
		})
	}
	render() {
		var fontWeight = this.state.hover ? { fontWeight: '600' } : { fontWeight: '500'}
		return(
			<a style={{...textStyle,...fontWeight}} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut}>{this.props.children}</a>
			)
	}
}

export default UIText