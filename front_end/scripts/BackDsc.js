import React, { Component } from 'react';
import ScrollBox from "./ScrollBox"

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
	background: styles.backColor,
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
					<ScrollBox text={this.props.card.backText} />
				</div>
			</div>
			)
		
	}
}

export default BackDsc