import React, { Component } from 'react';

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
	color:'#626262',
	border: '1px solid #aaaaaa',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

var back = {
	height:'100%',
	width:'100%',
	color:'#626262',
	background:'#f6f6f6',
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