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
		console.log("CARDS");
		console.log(this.props.cards);
		var cards = $.map(JSON.parse(this.props.cards), function(card) { return card });	
		return (
			<div className='cards-container' style={containerStyles}>
			  {cards.map(function(card){
			    return (
			  			<Card key={card.id} card={card}/>
			    	)
			  })}
			</div>
			)
	}
}

export default CardsContainer