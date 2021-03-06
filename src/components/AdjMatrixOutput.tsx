import React from 'react'
import "./static/AdjMatrixOutput.scss"

const rowOutput = (element: any) => {
	return (
		<tr>
			{element.map((value: any) => {
				return (
					<td>
						{value !== Number.MAX_SAFE_INTEGER ? value : <span>&infin;</span>}
					</td>)
			})}
		</tr>
	)
}

function AdjMatrixOutput(props: any) {
	return (
		<div className="adj-output">
			<table>
				{props.adj.map((element: any) => {
					return rowOutput(element)
				})}
			</table>

		</div>
	)
}

export default AdjMatrixOutput
