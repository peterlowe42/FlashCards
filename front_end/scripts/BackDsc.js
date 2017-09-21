import React, { Component } from 'react';
import ScrollBox from "./ScrollBox"

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

class BackDsc extends React.Component {
  constructor(props){
		super(props);
	}
	render() {
		return (
			<div className="back" style={{...cardSide, ...back}}>
				<div style={{width: '80%', height:'80%'}}>
					<ScrollBox text={this.props.card.back_text} />
				</div>
			</div>
			)
		
	}
}

export default BackDsc