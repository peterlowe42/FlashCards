import React, { Component } from 'react';

const styles = require('./styleVars')

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
	paddingTop: '2px',
	backgroundColor: styles.backColor,
	top: '0px',
	transform: 'translateZ(-1px) rotateY(180deg)',
};


class BackImage extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
				<div className="back" style={{...cardSide, ...back, ...{backgroundImage: 'url(http://localhost:3000' + this.props.card.image_url + ')', backgroundSize:'cover',backgroundPosition:'50%'}}}>
					{this.props.card.backText}
				</div>
			)
	}
}

export default BackImage