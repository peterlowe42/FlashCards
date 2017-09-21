import React, { Component } from 'react';
import Card from "./Card"
import UIText from "./UIText"

const styles = require('./styleVars')

var containerStyles = {
	width:'100%',
	fontFamily: styles.mainFont,
	fontSize: '2rem',
	textAlign: 'center',
	marginTop: '30px'
};

var clickPosition = {
	position:'absolute',
	bottom:'5%',
	right:'5%'
}

class CardsContainer extends React.Component {
	render () {
		return (
			<div className='cards-container' style={containerStyles}>
			  {this.props.cards.map(function(currentCard, index){
			  	if (index == 0) {
			    return (
			    		<Card key={currentCard.id} card={currentCard}>
			    			<div style={clickPosition}>
				  				<UIText>Click to flip</UIText>
			    			</div>
			  			</Card>	
			    	)
			  	}else{
			  		return (
			  			<Card key={currentCard.id} card={currentCard}/>
			    	)
			  	}
			  })}
			</div>
			)
	}
}

export default CardsContainer