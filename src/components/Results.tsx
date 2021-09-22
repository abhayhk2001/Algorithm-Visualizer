import React from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

function Results(props: any) {
	return (
		<div>
			<CytoscapeComponent elements={props.elements} style={{ width: '600px', height: '600px' }} zoomingEnabled={false} />
		</div>
	)
}

export default Results
