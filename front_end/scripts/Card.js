import React, { Component } from 'react';
import BackText from "./BackText"
import BackImage from "./BackImage"
import BackDsc from "./BackDsc"


var cardStlyes = {
	display:'inline-block',
	cursor: 'pointer',
	width: '280px',
	height:'280px',
	WebkitPerspective: '1000px',
	perspective: '1000px',
};

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
var front = {
	background: 'white',
};

const BackComponents = {
	Text: BackText,
	Image: BackImage,
	Dsc: BackDsc,
	Default: 'Text'
}

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.toggleClass = this.toggleClass.bind(this);
		this.state = {
			flipped: false
		};
	}
	toggleClass() {
        const currentState = this.state.flipped;
        this.setState({ flipped: !currentState });
    }
  render() { 
  	var BackComponent = BackComponents[this.props.card.back_type] || BackComponents['Default'] 
	 	return (
	  	<div className='card-div' style={cardStlyes}>
	  		<div className={ this.state.flipped ? 'flash-card flipped': 'flash-card'} 
	  					style={flashCard}
	  					onClick={this.toggleClass}>
				<div className="front" style={{...flashCard, ...cardSide, ...front}}>
					<h2>{this.props.card.front_text}</h2>
				</div>			
				<BackComponent card={this.props.card}/>
			</div>
	  	</div>	
	)     
  }
}

export default Card
