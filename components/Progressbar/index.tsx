import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '90px',
		backgroundColor: 'gray',
		borderRadius: 40,
		margin: 10
	}
	
	const Childdiv = {
		height: '10%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
	</div>
	</div>
	)
}

export default Progress_bar;
