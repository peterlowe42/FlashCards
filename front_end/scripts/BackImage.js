import React, { Component } from 'react';

const styles = require('./styleVars')

var flashCard = {
	width: '280px',
	height: '280px',
	position: 'absolute',
	transformStyle: 'preserve-3d',
	transition:'all 0.5s ease-in-out',
	boxShadow:'0px 0px 5px #dadada'
};

var cardSide = {
	height:'100%',
	width:'100%',
	color: styles.textColor,
	border: styles.cardBorder,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

var back = {
	height:'100%',
	width:'100%',
	color: styles.textColor,
	backgroundColor: styles.backColor,
	top: '0px',
	transform: 'rotateY(180deg)',
};


class BackImage extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div className="back" style={{...flashCard, ...cardSide, ...back, ...{backgroundImage: 'url(http://localhost:3000' + this.props.card.image_url + ')', backgroundSize:'cover',backgroundPosition:'50%'}}}>
					<h2>{this.props.card.backText}</h2>
				</div>
			)
	}
}

export default BackImage