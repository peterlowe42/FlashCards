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
	transition:'opacity 0.5s ease-in-out',
	backgroundImage:"url(/images/fade-out.png)",
	backgroundSize:'cover'
}

class ScrollBox extends React.Component {
	handleScroll(e){
		var box = e.target
		var fadeOut = box.getElementsByClassName('fade-out')[0]
		if (box.scrollTop === (box.scrollHeight - box.offsetHeight)){
			fadeOut.style.opacity = '0';
		}else{
			fadeOut.style.opacity = '1';
		}
	}
	render() {
		return(
			<div className='scroll-box' style={scrollBox} onScroll={this.handleScroll}>
				<div className='fade-out' style={fadeOut}></div>
				{this.props.text.split(/\\n/).map(function(text, index){
					return <p key={index}>{text}</p>
				})}
			</div>
			)
	}
}

export default ScrollBox
