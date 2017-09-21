import React, { Component } from 'react'

var scrollBox = {
	position: 'relative',
	width:'100%',
	height:'100%',
	textAlign:'left',
	fontSize:'1.2rem',
	lineHeight:'1.8rem',
	overflowY:'scroll'
}

var fadeOut = {
	position: 'fixed',
	pointerEvents: 'none',
	zIndex: '4',
	width:'100%',
	height:'65%',
	left:'0%',
	bottom:'0%',
	backgroundImage:"url(/images/fade-out.png)",
	backgroundSize:'cover'
}

class ScrollBox extends React.Component {
	render() {
		return(
			<div className='scroll-box' style={scrollBox}>
				<div className='fade-out' style={fadeOut}></div>
				{this.props.text.split(/\\n/).map(function(text, index){
					return <p key={index}>{text}</p>
				})}
			</div>
			)
	}
}

export default ScrollBox
