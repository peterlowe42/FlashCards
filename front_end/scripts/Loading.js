import React, { Component } from 'react'

var loadStyle = {
	width: '100%',
	height: '280px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center'
}

class Loading extends React.Component {
	render(){
		return(
			<div className='loading-div' style={ loadStyle }>
				<img src="./images/Loading.gif" style={{height:'100%'}}/>
			</div>
			)
	}
}

export default Loading