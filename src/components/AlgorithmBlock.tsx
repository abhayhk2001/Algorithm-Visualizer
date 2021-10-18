import React, { useState } from 'react'
import Gist from "react-gist"
import './static/AlgorithmBlock.scss'

function AlgorithmBlock(props: any) {
	const [control,] = useState(props.state)
	return (
		<>
			<div className="algorithmBlock">
				<h2>Algorithm</h2>
				{control === 0 ? <><Gist id="8b241da76a4eb2a7a42b0a6e82428b4c" /></> : <><Gist id="ee17c21fd0074bcd28819e6a2fad7027" /></>}
			</div>
		</>
	)
}

export default AlgorithmBlock
