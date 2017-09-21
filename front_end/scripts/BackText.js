import React, { Component } from 'react';

var cardSide = {
	height:'100%',
	width:'100%',
	color:'#626262',
	border: '1px solid #aaaaaa',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

var back = {
	color:'#626262',
	background:'#f6f6f6',
	top: '0px',
	transform: 'rotateY(180deg)',
};


class BackText extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="back" style={{...cardSide, ...back}}>
				<h2>{this.props.card.backText}</h2>
			</div>
			)
	}
}

export default BackText
