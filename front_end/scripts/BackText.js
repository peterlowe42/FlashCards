import React, { Component } from 'react';

const styles = require('./styleVars')

var cardSide = {
	height:'100%',
	width:'100%',
	color:styles.textColor,
	border: styles.cardBorder,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

var back = {
	background:styles.backColor,
	paddingTop: '2px',
	position:'absolute',
	top: '0px',
	transform: 'translateZ(-1px) rotateY(180deg)',
};


class BackText extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="back" style={{...cardSide, ...back}}>
					{this.props.card.backText}
			</div>
			)
	}
}

export default BackText
