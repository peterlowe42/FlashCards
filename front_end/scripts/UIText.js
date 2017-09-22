import React, { Component } from 'react';

var textStyle = {
	position:'relative',
	textDecoration: 'none',
	color: '#2f2f2f',
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
			<a href="#" style={{...textStyle,...fontWeight}} onMouseEnter={this.onMouseOver} onMouseLeave={this.onMouseOut}>
				{this.props.children}
			</a>
			)
	}
}

export default UIText