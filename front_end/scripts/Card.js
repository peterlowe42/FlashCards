import React, { Component } from 'react';
import BackText from "./BackText"
import BackImage from "./BackImage"
import BackDsc from "./BackDsc"

const styles = require('./styleVars')

var cardStlyes = {
	position: 'relative',
	display:'inline-block',
	cursor: 'pointer',
	width: '280px',
	height:'290px',
	WebkitPerspective: '1000px',
	perspective: '1000px',
};

var flashCard = {
	width: '280px',
	height: '280px',
	position: 'absolute',
	top: '0px',
	left:'0px',
	transformStyle: 'preserve-3d',
	transition:'all 0.5s ease-in-out',
	boxShadow:'0 0.2rem 1rem 0.2rem rgba(0, 0, 0, 0.05)'
};

var cardSide = {
	height:'100%',
	width:'100%',
	fontWieght: 'light',
	color: styles.textColor,
	border: styles.cardBorder,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

var front = {
	width: '280px',
	height: '280px',
	borderTop: '3px solid #747a7e',
	position: 'absolute',
	top:'0px',
	left:'0px',
	background: 'white',
};

const BackComponents = {
	Text: BackText,
	Image: BackImage,
	Dsc: BackDsc,
	Default: BackText
}

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.toggleClass = this.toggleClass.bind(this);
		this.state = {
			flipped: false,
			frontHidden: false
		};
	}
	toggleClass() {
        const currentState = this.state.flipped;
        this.setState({ flipped: !currentState });
    }
  render() { 
  	var BackComponent = BackComponents[this.props.card.backType] || BackComponents['Default'] 
	 	return (
	  	<div className='card-div' style={cardStlyes}>
	  		<div className={ this.state.flipped ? 'flash-card flipped': 'flash-card'} 
	  					style={flashCard}
	  					onClick={this.toggleClass}>
				<div className="front" style={{...cardSide, ...front}}>
					{this.props.card.frontText}
					{this.props.children}
				</div>			
				<BackComponent card={this.props.card}/>
			</div>
	  	</div>	
	)     
  }
}

export default Card
