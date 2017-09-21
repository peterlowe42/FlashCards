import React, { Component } from 'react';
import Card from "./Card.js"

var containerStyles = {
	width:'100%',
	fontFamily: 'sansSerif',
	textAlign: 'center',
	marginTop: '30px'
};

class CardsContainer extends React.Component {
	render () {
		return (
			<div className='cards-container' style={containerStyles}>
			  {this.props.cards.map(function(currentCard){
			    return (
			  			<Card key={currentCard.id} card={currentCard}/>
			    	)
			  })}
			</div>
			)
	}
}

export default CardsContainer